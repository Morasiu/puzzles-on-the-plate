<script setup lang="ts">

import AppLogo from "@/components/common/AppLogo.vue";
</script>

<template>
  <footer class="footer">
    <AppLogo class="logo"/>
    <span>© 2023 puzzlenatalerzu.pl</span>
    <span>Wszystkie prawa zastrzeżone</span>
    <span>Kopiowanie i rozpowszechnianie bez zgody puzzlenatalerzu.pl zabronione</span>
    <br>
    <span>Masz uwagi? Chcesz dodać swój przepis na stronę? Napisz do nas na <a href="mailto:kontakt@puzzlenatalerzu.pl">kontakt@puzzlenatalerzu.pl</a></span>
    <br>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: color-mix(in srgb, var(--primary) 20%, transparent);
  .logo {
    height: 10rem;
    margin: 1rem;
  }
}
</style>