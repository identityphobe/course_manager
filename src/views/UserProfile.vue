<template>
  <h1 class="title is-3 has-text-centered">Profile</h1>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div class="box">
          <label class="label">Full Name</label>
          <p>{{ user.fullName }}</p>
          <label class="label">Username</label>
          <p>{{ ID }}</p>
          <label class="label">Joined Courses</label>
          <ul>
            <li v-for="course in coursesJoined" :key="course">
              <!-- TODO: process date -->
              <router-link :to="course.link">{{ course.name }}</router-link>
              <span>{{
                " " +
                formatDate(course.dateStart) +
                " - " +
                formatDate(course.dateEnd)
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="column"></div>

    <!-- TODO: Create a component out of this -->
    <!-- <p>College of Computing and Informatics</p>
    
    <p>College of Engineering</p>
    <ul>
      <li v-for="course in COECourses" :key="course.name">
        <router-link :to="course.link">{{ course.name }}</router-link>
      </li>
    </ul> -->

    <!--  use v-for with computed properties to list all courses -->
    <!-- <li v-for="course in courses" :key="course.name"></li> -->
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
  name: "CoursesJoined",
  ID: "",
  computed: {},
  data() {
    return {
      user: {},
      coursesJoined: {},
    };
  },
  methods: {
    formatDate(date) {
      const splitDate = date.split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    },
  },
  created() {
    const dbRef = ref(database);
    this.ID = this.$route.params.id;
    // const coursesJoined = [];
    const fetchUser = async (ref, id) => {
      get(child(ref, `users/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            console.log("No data available");
          }
        })
        .then(() => {
          console.log(this.user);

          for (let i = 0; i < this.user.courses.length; i++) {
            const key = this.user.courses[i];
            get(child(ref, `courses/${this.user.courses[i]}`))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  this.coursesJoined[key] = snapshot.val();
                  this.coursesJoined[key].link = "/courses/" + key;
                } else {
                  console.log("No data available");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchUser(dbRef, this.ID);
  },
};
</script>