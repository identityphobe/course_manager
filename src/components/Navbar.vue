<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold" href="/">
        UNITEN Teaching and Learning Center
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              v-if="role === 'Admin'"
              class="button is-link"
              to="/users/admin"
              ><strong>Admin Area</strong></router-link
            >
            <router-link
              v-if="role === 'User'"
              class="button is-link"
              :to="'/users/' + ID + '/profile'"
              ><strong>Profile</strong></router-link
            >
            <router-link
              v-if="role === 'User'"
              class="button is-link"
              :to="'/courses'"
              ><strong>Courses</strong></router-link
            >
            <button v-if="ID" class="button is-link" @click="logout">
              <strong>Log Out</strong>
            </button>

            <span v-else class="" to="/login">
              <router-link class="button is-link" to="/register">
                <strong>Register</strong>
              </router-link>
              <router-link class="button is-link" to="/login">
                <strong>Log In</strong>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../router/index.js";

export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      ID: localStorage.getItem("ID"),
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    logout() {
      if (localStorage.getItem("ID")) {
        // localStorage.setItem("ID", null);
        localStorage.removeItem("ID");
        localStorage.removeItem("role");
        // localStorage.setItem("role", null);
        this.ID = null;
        this.role = null;
        router.push("/" + "?loggedOut=true");
      }
    },
  },
};
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>