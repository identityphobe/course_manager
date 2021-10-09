<template>
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
</template>
<script>
import Page from "../components/Page.vue";
import CourseCard from "../components/CourseCard.vue";

export default {
  name: "Home",
  components: {
    Page,
    CourseCard,
  },
};
</script>
