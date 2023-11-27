<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <img src="@/assets/logo.png"  alt="Logo">
    <span>© 2023 puzzlenatalerzu.pl</span>
    <span>Wszystkie prawa zastrzeżone</span>
    <span>Kopiowanie i rozpowszechnianie bez zgody puzzlenatalerzu.pl zabronione</span>
    <br>
    <a>Strona główna</a>
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
}
</style>