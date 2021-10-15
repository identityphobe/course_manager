<template>
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
  <h1 class="title is-4 has-text-centered">Your Upcoming courses</h1>
  <div class="section">
    <div class="content">
      <div class="columns">
        <div class="column">
          <CourseCard />
        </div>
        <div class="column"><CourseCard /></div>
        <div class="column"><CourseCard /></div>
        <div class="column"><CourseCard /></div>
      </div>
    </div>
  </div>

  <h1 class="title is-4 has-text-centered">
    Courses You Might Be Interested In
  </h1>
  <div class="section">
    <div class="content">
      <div class="columns">
        <div class="column">
          <CourseCard />
        </div>
        <div class="column"><CourseCard /></div>
        <div class="column"><CourseCard /></div>
        <div class="column"><CourseCard /></div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "../components/CourseCard.vue";
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
  components: { CourseCard },
  data() {
    return {
      registered: this.$route.query.registered === "true",
      loggedIn: this.$route.query.loggedIn === "true",
    };
  },
};
</script>
