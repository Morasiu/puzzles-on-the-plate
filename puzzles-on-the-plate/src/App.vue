<script setup lang="ts">
import AppFooter from "@/components/footer/AppFooter.vue";
import AppNavbar from "@/components/navbar/AppNavbar.vue";
import BaseToast from "@/components/common/toast/BaseToast.vue";
</script>

<template>
  <AppNavbar />
  <main>
    <router-view />
  </main>
  <AppFooter/>
  <BaseToast />
</template>

<style scoped>

</style>
