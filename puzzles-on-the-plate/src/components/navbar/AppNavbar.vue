<script setup lang="ts">

import AppLogo from "@/components/common/AppLogo.vue";
import {faBars} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="home">
      <AppLogo class="logo"/>
      <span class="name">Puzzle na talerzu</span>
    </RouterLink>
    <input type="search" placeholder="np. kurczak curry" class="search">
    <button class="toggle" aria-label="Show/Hide menu">
      <font-awesome-icon :icon="faBars"></font-awesome-icon>
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

  .home {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
    color: black;
    @media (max-width: 480px) {
      gap: 0.25rem;
    }
    .logo {
      width: 3rem;
      height: 100%;
    }

    .name {
      font-family: 'Roboto Slab', serif;
      min-width: fit-content;
      @media (max-width: 480px) {
        min-width: 4rem;
        text-align: center;
        line-height: 1;
      }
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