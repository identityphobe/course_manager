<template>
  {{ course_id }}
  <router-link :to="course_url">
    <div class="container">
      <div class="box mx-6 mt-3">
        <div class="columns">
          <div class="column is-four-fifths">
            <span>{{ name }}</span>
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
  </router-link>
</template>

<script>
export default {
  name: "CourseCardAdmin",
  data() {
    return {
      course_url: `/courses/${this.course_id}`,
    };
  },
  props: { name: String, course_id: String },
};
</script>