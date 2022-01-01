<template>
  <div>
    <div class="columns" v-if="role !== 'Speaker'">
      <div class="column"></div>

      <div class="column is-half">
        <div v-if="createdCourse" class="section has-text-centered">
          <div class="notification is-success has-text-centered">
            <button class="delete" @click="deleteNotification"></button>
            Course created. View <a :href="'/courses/' + newCourseID">here</a>.
          </div>
        </div>

        <div v-if="courseDeleted" class="section has-text-centered">
          <div class="notification is-success has-text-centered">
            <button class="delete" @click="deleteNotification"></button>
            Course deleted.
          </div>
        </div>

        <!-- TODO: Create a component out of this -->
        <p><strong>College of Computing and Informatics</strong></p>
        <ul v-if="role === 'User'">
          <p v-if="Object.keys(CCICourses).length === 0">
            No course available.
          </p>
          <li v-for="course in CCICourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }} </router-link
            ><span v-if="course.isFull">
              (<span class="isFull">Full</span>)</span
            >
          </li>
        </ul>
        <ul v-else-if="role === 'Admin'">
          <li v-for="course in CCICourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }}</router-link>
            <span v-if="course.hasCompleted" class="hasCompleted">
              (Completed)</span
            >
          </li>
        </ul>
        <p><strong>College of Engineering</strong></p>
        <ul v-if="role === 'User'">
          <p v-if="Object.keys(CCICourses).length === 0">
            No course available.
          </p>
          <li v-for="course in COECourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }} </router-link>
            <span v-if="course.isFull">
              (<span class="isFull">Full</span>)</span
            >
          </li>
        </ul>
        <ul v-else-if="role === 'Admin'">
          <li v-for="course in COECourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }}</router-link>
            <span v-if="course.hasCompleted" class="hasCompleted">
              (Completed)</span
            >
          </li>
        </ul>
      </div>
      <!--  use v-for with computed properties to list all courses -->
      <!-- <li v-for="course in courses" :key="course.name"></li> -->
      <div class="column"></div>
    </div>
    <div v-else class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <p class="has-text-centered" v-if="!Object.keys(speakerCourses).length">
          No courses assigned yet.
        </p>
        <ul>
          <li v-for="course in speakerCourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }} </router-link>
          </li>
        </ul>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import database from "../database";
import { ref, child, get } from "firebase/database";

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

export default {
  name: "CourseList",
  components: {},
  data() {
    return {
      courses: {},
      role: "",
      User: {},
      createdCourse: this.$route.query.createdCourse,
      courseDeleted: this.$route.query.courseDeleted,
      newCourseID: this.$route.query.newCourseID,
    };
  },
  methods: {
    deleteNotification() {
      const notificationNode = document.querySelectorAll(".notification");
      notificationNode.parentNode.remove();
      console.log(notificationNode);
    },
    filterCourses(department) {
      let filtered_courses = Object.filter(
        this.courses,
        (course) => course.department === department
      );

      // add completed tag
      for (const key in filtered_courses) {
        //set completion status
        let date = new Date(filtered_courses[key].dateEnd);

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        console.log(filtered_courses[key].name);
        console.log(today.getTime());
        console.log(date.getTime());
        console.log(today.getTime() > date.getTime());
        if (today.getTime() > date.getTime()) {
          filtered_courses[key].hasCompleted = true;
        } else {
          filtered_courses[key].hasCompleted = false;
        }
        let Users = {};
        //set capacity status
        if (filtered_courses[key].Users) {
          Users = filtered_courses[key].Users;
          console.log(Users);
        }

        const UserNum = Object.keys(Users).length;
        const capacity = Number(filtered_courses[key].capacity);

        if (UserNum === capacity) {
          filtered_courses[key].isFull = true;
        } else {
          filtered_courses[key].isFull = false;
        }
      }

      if (this.role === "User") {
        filtered_courses = Object.filter(
          filtered_courses,
          (course) => !course.hasCompleted
        );
      }

      for (let key in filtered_courses) {
        filtered_courses[key].link = "/courses/" + key;
      }

      return filtered_courses;
    },
  },
  computed: {
    CCICourses() {
      return this.filterCourses("CCI");
    },

    COECourses() {
      return this.filterCourses("COE");
    },
    speakerCourses() {
      // const id = localStorage.getItem("ID");
      // const role = localStorage.getItem("role");
      let filtered_courses = Object.filter(
        this.courses,
        (course) => this.User.fullName === course.speaker
      );

      for (let key in filtered_courses) {
        filtered_courses[key].link = "/courses/" + key;
      }
      return filtered_courses;
    },
  },
  created() {
    this.role = localStorage.getItem("role");
    let ID = localStorage.getItem("ID");

    const dbRef = ref(database);
    const fetchCourses = async () => {
      get(child(dbRef, `courses/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.courses = snapshot.val();
            fetchUser();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchUser = async () => {
      get(child(dbRef, `users/${ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.User = snapshot.val();
            console.log(this.User);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourses();
  },
};
</script>

<style>
li {
  list-style: inside;
}

.hasCompleted {
  color: green;
}

.isFull {
  color: red;
}
</style>