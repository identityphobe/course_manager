<template>
  <h1 class="title is-3 has-text-centered">{{ title }}</h1>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Page",
  props: {
    title: String,
  },
};
</script>