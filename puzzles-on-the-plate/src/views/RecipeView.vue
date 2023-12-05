<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import type {Recipe} from "@/service/puzzle/types";
import {getRecipe} from "@/service/puzzle/api";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

const recipe = ref<Recipe>()

getRecipe(slug).then(x => {
  if (x.status == 404) {
    router.replace({name: "NotFound"})
  }
  recipe.value = x.data;
});

</script>

<template>
  <div class="recipe">
    <div v-if="recipe" class="header">
      <img :src="recipe.imageUrl" :alt="recipe.name" class="image">
      <div class="description">
        <h1>{{ recipe.name }}</h1>
        <span>{{ recipe.shortDescription }}</span>
        <div class="tags">
          <div v-for="tag in recipe.tags" :key="tag" class="tag">
            {{ tag }}
          </div>
        </div>

      </div>
    </div>
    <div v-else>
      Ładowanie...
    </div>
  </div>
</template>

<style scoped lang="scss">
.recipe {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 5rem;
  @media (max-width: 480px) {
    margin: 0rem;
  }
  .header {
    display: flex;
    @media (max-width: 480px) {
      flex-direction: column;
    }

    .image {
      width: 50%;
      @media (max-width: 480px) {
        width: 100%;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 50%;

      .tags {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .tag {
          background-color: var(--primary);
          padding: 0rem 0.5rem 0rem 0.5rem;
        }
      }
    }
  }
}
</style>
