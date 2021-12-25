<template>
  <div v-if="loggedOut" class="section">
    <div class="notification is-success">
      <button class="delete" @click="deleteNotification"></button>
      Logout successful
    </div>
  </div>
  <h1 class="title is-3 mt-6 has-text-centered">
    Welcome to UNITEN's TLC Short Course Platform
  </h1>
  <CourseList />
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
  method: {
    deleteNotification() {
      const notificationNode = document.querySelectorAll(".notification");
      notificationNode.parentNode.remove();
      console.log(notificationNode);
    },
  },
  data() {
    return {
      loggedOut: this.$route.query.loggedOut === "true",
    };
  },
};
</script>
