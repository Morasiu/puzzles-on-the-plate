<script setup lang="ts">
import {getRecipes} from "@/service/puzzle/api";
import {ref} from "vue";
import type {Recipe} from "@/service/puzzle/types";

const recipes = ref<Recipe[]>();
getRecipes().then(response => recipes.value = response.data);

</script>

<template>
  <div class="container">
    <h1 class="recommended-recipes">
      Polecane przepisy
    </h1>
    <div>
      <div v-if="recipes" class="gallery">
        <div v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
          <router-link :to="'/przepisy/' + recipe.puzzles[0].slug">
            <img :src="recipe.imageUrl" :alt="recipe.name" class="photo">
            <div class="name">
              {{ recipe.name }}
            </div>
          </router-link>
        </div>
      </div>
      <div v-else>
        Ładowanie...
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-background-soft);

  .recommended-recipes {
    margin-top: 1rem;
    font-family: 'Roboto Slab', serif;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    margin: 1rem;

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(10, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      margin: 1rem 0 2rem 0;
    }

    .recipe-card {
      width: 20rem;
      -webkit-box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 1);
      box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 1);
      background-color: var(--color-background);
      @media (max-width: 480px) {
        width: 10rem;
      }
      a {
        all: unset;
        cursor: pointer;
      }

      .photo {
        height: 80%;
        width: 100%;
      }

      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        font-family: 'Roboto Slab', serif;
        font-size: 1.25rem;
        text-align: center;



        @media (max-width: 480px) {
          padding: 0rem;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>