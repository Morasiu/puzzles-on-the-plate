<script setup lang="ts">
import AppFooter from "@/components/footer/AppFooter.vue";
import AppNavbar from "@/components/navbar/AppNavbar.vue";
</script>

<template>
  <AppNavbar />
  <main>
    <router-view />
  </main>
  <AppFooter/>

</template>

<style scoped>

</style>
