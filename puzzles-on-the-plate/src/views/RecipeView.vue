<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {computed, ref} from "vue";
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

const instructions = computed(() => {
  if (!recipe.value) {
    return [];
  }
  return recipe.value?.ingredients.map(x => x.instructions);
});

</script>

<template>
  <div class="container">
    <div v-if="recipe" class="recipe">
      <div class="header">
        <img :src="recipe.imageUrl" :alt="recipe.name" class="image">
        <div class="description">
          <h1>{{ recipe.name }}</h1>
          <span>{{ recipe.shortDescription }}</span>
          <div class="tags">
            <div v-for="tag in recipe.tags" :key="tag" class="tag">
              {{ tag }}
            </div>
          </div>
          <h2 class="ingredients">Składniki</h2>
          <div class="ingredients-list">
            <div v-for="ingredient in recipe.ingredients" :key="ingredient.name" class="ingredient">
              <span>{{ ingredient.quantityDescription }}</span>
            </div>
          </div>
          <div class="instructions-container">
            <h2>Sposób przygotowania</h2>
            <div class="instructions">
              <span v-for="(instruction, index) in instructions" :key="instruction">{{ index + 1 }}. {{
                  instruction
                }}</span>
              <span>Smacznego!</span>
            </div>
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
  display: flex;
  justify-content: center;
  margin: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 480px) {
    margin: 0rem;
  }

  .header {
    display: flex;
    @media (max-width: 480px) {
      flex-direction: column;
    }

    .image {
      width: auto;
      height: 80vh;
      @media (max-width: 480px) {
        width: 100%;
        height: auto;
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

      .ingredients {
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .ingredients-list {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .ingredient {
          display: flex;
          gap: 0.5rem;
        }
      }

      .instructions-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem 1rem 1rem 3rem;

        .instructions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }
}
</style>
