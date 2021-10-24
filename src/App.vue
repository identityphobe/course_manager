<template>
  <Navbar />
  <router-view />

  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
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
import Navbar from "./components/Navbar.vue";
// Import the functions you need from the SDKs you need

export default {
  name: "App",
  components: {
    // HelloWorld,
    Navbar,
  },
};
</script>

<style>
ul {
  list-style: inside;
}
</style>
