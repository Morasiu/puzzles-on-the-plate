<script setup lang="ts">

import type {Ingredient} from "@/service/puzzle/types";
import {faSquareMinus} from "@fortawesome/free-solid-svg-icons";

const props = defineProps<{
  ingredients: Ingredient[],
}>();

const emit = defineEmits<{
  (e: "ingredientRemoved", ingredient: Ingredient): void
}>();

const onIngredientRemoved = (ingredient: Ingredient) => {
  emit("ingredientRemoved", ingredient);
}

</script>

<template>
  <div>
    <div v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient">
      <font-awesome-icon :icon="faSquareMinus" class="remove-icon" @click="onIngredientRemoved(ingredient)"/> <span>{{ ingredient.quantityDescription }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.remove-icon {
  color: var(--primary);
  cursor: pointer;
}
</style>