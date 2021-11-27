<template>
  <div class="section pt-0">
    <div class="columns">
      <div class="column"></div>

      <div class="column is-three-fifths">
        <!-- TODO: Create a component out of this -->
        <p><strong>College of Computing and Informatics</strong></p>
        <ul>
          <li v-for="course in CCICourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }}</router-link>
          </li>
        </ul>
        <p><strong>College of Engineering</strong></p>
        <ul>
          <li v-for="course in COECourses" :key="course.name">
            <router-link :to="course.link">{{ course.name }}</router-link>
          </li>
        </ul>
      </div>
      <!--  use v-for with computed properties to list all courses -->
      <!-- <li v-for="course in courses" :key="course.name"></li> -->
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
    };
  },
  computed: {
    CCICourses() {
      let filtered_courses = Object.filter(
        this.courses,
        (course) => course.department === "CCI"
      );

      for (let key in filtered_courses) {
        filtered_courses[key].link = "/courses/" + key;
      }

      return filtered_courses;
    },
    COECourses() {
      let filtered_courses = Object.filter(
        this.courses,
        (course) => course.department === "COE"
      );
      for (let key in filtered_courses) {
        filtered_courses[key].link = "/courses/" + key;
      }

      return filtered_courses;
    },
  },
  created() {
    const dbRef = ref(database);
    const fetchCourses = async () => {
      get(child(dbRef, `courses/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.courses = snapshot.val();
            console.log(this.courses);
            console.log(Object.keys(this.courses));
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
</style>