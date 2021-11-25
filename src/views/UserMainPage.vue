<template>
  <!-- TODO: Add logout notification -->
  <div v-if="registered" class="section">
    <div class="notification is-success">
      <button class="delete"></button>
      Registration successful
    </div>
  </div>

  <div v-if="loggedIn" class="section">
    <div class="notification is-success">
      <button class="delete"></button>
      Login successful
    </div>
  </div>

  <div v-if="userRole === 'User'" class="section">
    <h1 class="title is-4 has-text-centered">Your Upcoming Courses</h1>

    <p
      v-if="Object.keys(this.registeredCourses).length === 0"
      class="has-text-centered"
    >
      Nothing for now. <router-link to="/courses">Join a course.</router-link>
    </p>
    <ul>
      <li v-for="course in registeredCourses" :key="course.name">
        <router-link :to="course.link">{{ course.name }}</router-link>
      </li>
    </ul>
  </div>
  <div v-else class="section">
    <h1 class="title is-4 has-text-centered">Admin Area</h1>
    <strong>Actions</strong>
    <ol>
      <li><router-link to="/courses">View courses</router-link></li>
      <li><router-link to="/users">View users</router-link></li>
    </ol>
  </div>
</template>

<script>
import database from "../database";
import { child, get, ref } from "firebase/database";
// import CourseCard from "../components/CourseCard.vue";
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
// console.log(this.$route.query.register);
export default {
  name: "UserMainPage",
  // components: { CourseCard },
  data() {
    return {
      registered: this.$route.query.registered === "true",
      loggedIn: this.$route.query.loggedIn === "true",
      userID: this.$route.params.id,
      userRole: localStorage.getItem("role"),
      userData: {},
      registeredCourses: {},
    };
  },
  created() {
    // const courseID = this.$route.params.id;
    const dbRef = ref(database);
    const fetchUser = async () => {
      get(child(dbRef, `users/${this.userID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
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
            this.userData.courses.forEach((course) => {
              this.registeredCourses[course] = {
                name: courses[course].name,
                link: "/courses/" + course,
              };
            });
            console.log(this.registeredCourses);
            // console.log(this.courses);
            // console.log(Object.keys(this.courses));
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
