<template>
  <div class="section">
    <CourseCardAdmin
      v-for="(course, key) in courses"
      :key="course.name"
      :name="course.name"
      :course_id="key"
      class="mt-3"
    />
  </div>
</template>

<script>
import database from "../../database";
import { ref, child, get } from "firebase/database";
import CourseCardAdmin from "../../components/CourseCardAdmin.vue";
//let courses = {};

export default {
  name: "CourseList",
  components: {
    CourseCardAdmin,
  },
  data() {
    return {
      courses: {},
    };
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