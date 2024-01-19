<script setup lang="ts">

import type {Ingredient, NutritionalValue} from "@/service/puzzle/types";
import {computed} from "vue";

const props = defineProps<{
  ingredients: Ingredient[],
}>();

const servings = 2;

const weight = computed(() => props.ingredients
    .reduce((sum, b) => sum + b.quantity, 0));

const getNutritionValueBase = (value: NutritionalValue, name: string) => {
  return value[name] ?? 0;
}

const getNutritionValuePer100g = (name: string) => {
  const allValue = props.ingredients
      .reduce((sum, b) => sum + (b.quantity / 100 * getNutritionValueBase(b.nutritionalValue, name)), 0);

  return (allValue / weight.value * 100).toFixed(1);
};

const getNutritionValuePerServing = (name: string, servings: number) => {
  const value = props.ingredients
      .reduce((sum, b) => sum + (b.quantity / 100 * getNutritionValueBase(b.nutritionalValue, name)), 0) / servings;
  return value.toFixed(1);
};

</script>

<template>
  <div class="container">
    <h2>Wartości odżywcze</h2>
    <table>
      <tr>
        <th class="name">Wartość odżywcza</th>
        <th class="servings">w porcji ({{ weight / 2 }} g)</th>
        <th class="hundred-g">w 100 g</th>
      </tr>
      <tr>
        <td>Wartość energetyczna</td>
        <td>{{ getNutritionValuePerServing("calories", servings) }} kcal</td>
        <td>{{ getNutritionValuePer100g("calories") }} kcal</td>
      </tr>
      <tr>
        <td>Tłuszcz</td>
        <td>{{ getNutritionValuePerServing("totalFat", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("totalFat") }} g</td>
      </tr>
      <tr>
        <td>w tym kwasy tłuszczowe nasycone</td>
        <td>{{ getNutritionValuePerServing("saturatedFat", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("saturatedFat") }} g</td>
      </tr>
      <tr>
        <td>Węglowodany</td>
        <td>{{ getNutritionValuePerServing("totalCarbohydrate", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("totalCarbohydrate") }} g</td>
      </tr>
      <tr>
        <td>w tym cukry</td>
        <td>{{ getNutritionValuePerServing("sugar", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("sugar") }} g</td>
      </tr>
      <tr>
        <td>Białko</td>
        <td>{{ getNutritionValuePerServing("protein", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("protein") }} g</td>
      </tr>
      <tr>
        <td>Sól</td>
        <td>{{ getNutritionValuePerServing("sodium", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("sodium") }} g</td>
      </tr>
      <tr>
        <td>Cholesterol</td>
        <td>{{ getNutritionValuePerServing("cholesterol", servings) }} g</td>
        <td>{{ getNutritionValuePer100g("cholesterol") }} g</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50rem;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 480px) {
    width: 100%;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;

    .name {
      width: 70%;
      font-weight: bold;
      @media (max-width: 480px) {
        width: 60%;
      }
    }

    .servings {
      font-weight: bold;
      @media (max-width: 480px) {
        width: 20%;
      }
    }

    .hundred-g {
      font-weight: bold;
      @media (max-width: 480px) {
        width: 20%;
      }
    }
  }
}

</style>
