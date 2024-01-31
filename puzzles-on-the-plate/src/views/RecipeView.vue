<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {computed, ref} from "vue";
import type {Puzzle, Recipe} from "@/service/puzzle/types";
import {getRecipe} from "@/service/puzzle/api";
import CookingPhaseInstructions from "@/components/home/recipes/CookingPhaseInstructions.vue";
import NutritionValues from "@/components/home/recipes/NutritionValues.vue";
import IngredientList from "@/views/IngredientList.vue";
import SearchBar from "@/components/home/base/search/SearchBar.vue";
import type {Suggestion} from "@/components/home/base/search/types";
import {useI18n} from 'vue-i18n'

const {t} = useI18n();

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

const recipe = ref<Recipe>()
const currentPuzzle = ref<Puzzle>();
const servings = ref(2);

getRecipe(slug).then(x => {
  if (x.status == 404) {
    router.replace({name: "NotFound"})
    return;
  }
  recipe.value = x.data;
  currentPuzzle.value = x.data?.puzzles[0];
});

const currentInstructions = computed(() => {
  if (!recipe.value) {
    return [];
  }

  if (!currentPuzzle.value) {
    return [];
  }

  const ingredients = currentPuzzle.value?.ingredients;
  return recipe.value?.ingredients.filter(x => ingredients.includes(x.name)).flatMap(x => x.instructions);
});

const currentIngredients = computed(() => {
  return recipe.value?.ingredients.filter(x => currentPuzzle.value?.ingredients.includes(x.name)) ?? [];
});

const getCookingPhaseInstructions = (cookingPhaseName: string) => {
  const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

  return currentInstructions.value
      .filter(x => x.cookingPhase.startsWith(cookingPhaseName))
      .sort((a, b) => naturalCollator.compare(a.cookingPhase, b.cookingPhase))
      .map(x => x.details);
};

const searchValue = ref("");
const unusedIngredients = computed<Suggestion[]>(() => {
  const suggestions = recipe.value?.ingredients
      .filter(x => !currentPuzzle.value?.ingredients.includes(x.name))
      .map(x => ({
        label: t(`ingredients.${x.name}`),
        value: x.name,
      })) ?? [];
  return suggestions;
});
const onSearched = (suggestion: Suggestion) => {
  const ingredient = recipe.value?.ingredients.find(x => x.name == suggestion.value);
  if (!ingredient) {
    return;
  }
  currentPuzzle.value = {...currentPuzzle.value} as Puzzle;
  currentPuzzle.value?.ingredients.push(ingredient.name);
};

const preparation = computed(() => getCookingPhaseInstructions("Preparation"));
const frying = computed(() => getCookingPhaseInstructions("Frying"));
const sauce = computed(() => getCookingPhaseInstructions("Sauce"));
const mixing = computed(() => getCookingPhaseInstructions("Mixing"));

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
          <div class="servings">
            <span>liczba porcji: {{ servings }}</span>
          </div>
          <IngredientList :ingredients="currentIngredients"/>
          <SearchBar v-model="searchValue" :suggestions="unusedIngredients" class="search" @search="onSearched" />
        </div>
      </div>
      <div class="instructions-container">
        <h2>Sposób przygotowania</h2>
        <CookingPhaseInstructions v-if="preparation.length > 0" title="Przygotowanie" :instructions="preparation"/>
        <CookingPhaseInstructions v-if="frying.length > 0" title="Smażenie" :instructions="frying"/>
        <CookingPhaseInstructions v-if="sauce.length > 0" title="Sos" :instructions="sauce"/>
        <CookingPhaseInstructions v-if="mixing.length > 0" title="Mieszanie" :instructions="mixing"/>
        <h3>
          Gotowe! Smaczenego!
        </h3>
      </div>
      <NutritionValues :ingredients="currentIngredients"/>
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
      justify-content: center;
      min-width: 50%;

      .search {
        margin-top: 1rem;
        width: 70%;
      }

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
      }

      .servings {
        margin-bottom: 1rem;
      }

    }
  }

  .instructions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1rem 0 1rem;
  }
}
</style>
