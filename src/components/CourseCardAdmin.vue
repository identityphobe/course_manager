<template>
  <div class="container">
    <div class="box mx-6">
      <div class="columns">
        <div class="column is-four-fifths">
          <span>Course</span>
        </div>
        <div class="column">
          <router-link to="/edit">
            <span class="icon">
              <i class="far fa-edit"></i>
            </span>
          </router-link>
          <router-link to="/">
            <span class="icon">
              <i class="far fa-envelope"></i>
            </span>
          </router-link>
          <router-link to="/">
            <span class="icon">
              <i class="far fa-share-square"></i>
            </span>
          </router-link>
          <router-link to="/">
            <span class="icon">
              <i class="fas fa-user-check"></i>
            </span>
          </router-link>
          <router-link to="/">
            <span class="icon">
              <i class="fas fa-chart-bar"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCardAdmin",
};
</script>