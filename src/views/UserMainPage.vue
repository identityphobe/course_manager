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

  <h1 class="title is-4 has-text-centered">Your Upcoming Courses</h1>
  <div class="section">
    <p class="has-text-centered">
      Nothing for now. <router-link to="/courses">Join a course.</router-link>
    </p>
  </div>
</template>

<script>
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
    };
  },
};
</script>
