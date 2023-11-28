<script setup lang="ts">

</script>

<template>
  <header class="header">
    <img src="@/assets/logo.png" class="logo" alt="Logo">
    <span class="name">Puzzle na talerzu</span>
    <input type="search" placeholder="np. kurczak curry" class="search">
    <button class="toggle" aria-label="Show/Hide menu">
      <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: color-mix(in srgb, var(--primary) 20%, transparent);
  height: 3rem;
  display: flex;
  padding: 0.25rem;
  gap: 1rem;
  @media (max-width: 480px) {
    gap: 0.25rem;
  }
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .logo {
    width: auto;
    height: 100%;
  }

  .name {
    font-family: 'Roboto Slab', serif;
    @media (max-width: 480px) {
      text-align: center;
      line-height: 1;
    }
  }

  input[type=search]:focus {
    border: 1px solid var(--primary) !important;
  }

  .search {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary);
    width: 70%;
  }

  .toggle {
    background-color: var(--primary);
    border: none;
    width: 2rem;
    height: 2rem;
    color: white;
    border-radius: 0.25rem;
    @media (min-width: 480px) {
      display: none;
    }
  }

}
</style>