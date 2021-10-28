<template>
  <h1 class="title is-3 has-text-centered">Courses Joined</h1>
  <div class="section pt-0">
    <!-- TODO: Create a component out of this -->
    <!-- <p>College of Computing and Informatics</p>
    <ul>
      <li v-for="course in CCICourses" :key="course.name">
        <router-link :to="course.link">{{ course.name }}</router-link>
      </li>
    </ul>
    <p>College of Engineering</p>
    <ul>
      <li v-for="course in COECourses" :key="course.name">
        <router-link :to="course.link">{{ course.name }}</router-link>
      </li>
    </ul> -->

    <!--  use v-for with computed properties to list all courses -->
    <!-- <li v-for="course in courses" :key="course.name"></li> -->
  </div>
</template>

<script>
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
export default {
  name: "CoursesJoined",
  computed: {},
  data() {
    return {
      user: {},
    };
  },
};
</script>