<template>
  <h1 class="title has-text-centered is-4">Courses</h1>
  <CourseList />
</template>
<script>
import CourseList from "../components/CourseList.vue";
export default {
  name: "Courses",
  components: { CourseList },
};
</script>