<template>
  <!-- TODO: Add logout notification -->
  <div v-if="registered" class="section">
    <div class="notification is-success">
      <button class="delete" @click="deleteNotification"></button>
      Registration successful
    </div>
  </div>

  <div v-if="loggedIn" class="section">
    <div class="notification is-success">
      <button class="delete" @click="deleteNotification"></button>
      Login successful
    </div>
  </div>

  <div v-if="userRole === 'User'" class="section">
    <h1 class="title is-4 has-text-centered">Your Upcoming Courses</h1>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <p
          v-if="Object.keys(this.registeredCourses).length === 0"
          class="has-text-centered"
        >
          Nothing for now. Click a course below to join one.
        </p>
        <ul>
          <li v-for="course in registeredCourses" :key="course.name">
            <!-- hasStarted actually -->
            <span
              ><router-link :to="course.link">{{ course.name }}</router-link>
              {{ course.dateStart }}-{{ course.dateEnd }}</span
            >
          </li>
        </ul>
      </div>
      <div class="column"></div>
    </div>
    <h1 class="title is-4 has-text-centered">Available Courses</h1>
    <CourseList />
  </div>
  <div v-else-if="userRole === 'Speaker'" class="section">
    <h1 class="title is-4 has-text-centered">Your Courses</h1>
    <CourseList />
  </div>
  <div v-else class="section mx-6">
    <h1 class="title is-2 has-text-centered">Admin Area</h1>

    <div class="columns">
      <div class="column" />
      <div class="column">
        <strong class="is-size-4">Actions</strong>
        <ol>
          <li>
            <router-link class="is-size-4" to="/courses"
              >View courses</router-link
            >
          </li>
          <li>
            <router-link class="is-size-4" to="/courses/new"
              >Create a course</router-link
            >
          </li>
          <li>
            <router-link class="is-size-4" to="/users">View users</router-link>
          </li>
          <li>
            <router-link class="is-size-4" to="/users/new"
              >Add a user</router-link
            >
          </li>
        </ol>
      </div>
      <div class="column" />
    </div>
  </div>
</template>

<script>
import database from "../database";
import { child, get, ref } from "firebase/database";
import { formatDate } from "../utils";
import CourseList from "../components/CourseList.vue";
// import CourseCard from "../components/CourseCard.vue";

// console.log(this.$route.query.register);
export default {
  name: "UserMainPage",
  components: { CourseList },
  data() {
    return {
      createdCourse: this.$route.query.createdCourse,
      newCourseID: this.$route.query.newCourseID,
      registered: this.$route.query.registered === "true",
      loggedIn: this.$route.query.loggedIn === "true",
      userID: this.$route.params.id,
      userRole: localStorage.getItem("role"),
      userData: {},
      registeredCourses: {},
    };
  },
  methods: {
    checkCompletion(endDate) {
      endDate = new Date(endDate);

      endDate.setHours(0);
      endDate.setMinutes(0);
      endDate.setSeconds(0);
      endDate.setMilliseconds(0);

      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);

      if (today.getTime() > endDate.getTime()) {
        return true;
      } else {
        return false;
      }
    },
    deleteNotification() {
      const notificationNode = document.querySelectorAll(".notification");
      notificationNode.parentNode.remove();
      console.log(notificationNode);
    },
  },
  created() {
    document.addEventListener("DOMContentLoaded", () => {
      (document.querySelectorAll(".notification .delete") || []).forEach(
        ($delete) => {
          const $notification = $delete.parentNode;

          $delete.addEventListener("click", () => {
            $notification.parentNode.removeChild($notification);
          });
        }
      );
    });
    // const courseID = this.$route.params.id;
    const dbRef = ref(database);
    const fetchUser = async () => {
      get(child(dbRef, `users/${this.userID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.userData = snapshot.val();
            // let participants = {};
            // participants = Object.filter(snapshot.val(), (user) => {
            //   if (user.courses === 0) {
            //     return false;
            //   } else if (user.courses.some((id) => id === courseID)) {
            //     return true;
            //   }
            // });
            // this.participants = participants;
            // console.log(participants);
          } else {
            console.log("No data available");
          }
        })
        .then(() => {
          fetchCourses();
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const fetchCourses = async () => {
      get(child(dbRef, `courses/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let courses = snapshot.val();

            if (this.userData.courses !== 0) {
              this.userData.courses.forEach((course) => {
                let attended = false;

                if (courses[course] && courses[course].participants) {
                  attended = courses[course].participants[this.userID];
                }

                let hasStarted = this.checkCompletion(
                  courses[course].dateStart
                );

                if (attended || hasStarted) {
                  delete this.registeredCourses[course];
                  // this.registeredCourses[course] = {
                  //   name: courses[course].name,
                  //   link: "/courses/" + course,
                  //   dateStart: formatDate(courses[course].dateStart),
                  //   dateEnd: formatDate(courses[course].dateEnd),
                  //   attended: attended,
                  //   hasStarted: hasStarted,
                  // };
                } else {
                  this.registeredCourses[course] = {
                    name: courses[course].name,
                    link: "/courses/" + course,
                    dateStart: formatDate(courses[course].dateStart),
                    dateEnd: formatDate(courses[course].dateEnd),
                  };
                }
                console.log(this.registeredCourses);
              });
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    // fetchCourse();
    fetchUser();
  },
};
</script>
