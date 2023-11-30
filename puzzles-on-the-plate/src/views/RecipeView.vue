<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
const slug = route.params["slug"];
</script>

<template>
  <div class="about">
    <h1>{{ slug }}</h1>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
