<template>
  <h1 class="title is-5 mt-6 has-text-centered">
    Welcome to UNITEN's TLC Short Courses Platform
  </h1>
  <CourseList />
  <div v-if="loggedOut" class="section">
    <div class="notification is-success">
      <button class="delete"></button>
      Logout successful
    </div>
  </div>
</template>
<script>
import CourseList from "../components/CourseList.vue";
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
export default {
  name: "Home",
  components: {
    CourseList,
  },
  data() {
    return {
      loggedOut: this.$route.query.loggedOut === "true",
    };
  },
};
</script>
