<template>
  <div class="section">
    {{ CCICourses }}
    {{ COECourses }}
    <!--  use v-for with computed properties to list all courses -->
    <!-- <li v-for="course in courses" :key="course.name"></li> -->
  </div>
</template>

<script>
import database from "../database";
import { ref, child, get } from "firebase/database";
//let courses = {};

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
      return Object.filter(
        this.courses,
        (course) => course.department === "CCI"
      );
    },
    COECourses() {
      return Object.filter(
        this.courses,
        (course) => course.department === "COE"
      );
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