<template>
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
export default {
  name: "UserMainPage",
  components: { CourseCard },
};
</script>
