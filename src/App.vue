<template>
  <Navbar />
  <Page title="Short Courses" />
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

  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Page from "./components/Page.vue";
import CourseCard from "./components/CourseCard.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Navbar,
    Page,
    CourseCard,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
