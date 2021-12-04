<template>
  <h1 class="title has-text-centered is-4">Courses</h1>

  <CourseList />
</template>
<script>
import CourseList from "../components/CourseList.vue";
export default {
  name: "Courses",
  data() {
    return {
      createdCourse: this.$route.query.createdCourse,
      newCourseID: this.$route.query.newCourseID,
    };
  },
  components: { CourseList },
  methods: {
    deleteNotification() {
      const notificationNode = document.querySelectorAll(".notification");
      notificationNode.remove();
      console.log(notificationNode);
    },
  },
};
</script>