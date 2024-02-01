<script setup lang="ts">

import type {Ingredient} from "@/service/puzzle/types";
import {faSquareMinus} from "@fortawesome/free-solid-svg-icons";

const props = defineProps<{
  ingredients: Ingredient[],
}>();

</script>

<template>
  <div>
    <div v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient">
      <font-awesome-icon :icon="faSquareMinus" class="remove-icon"/> <span>{{ ingredient.quantityDescription }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.remove-icon {
  color: var(--primary);
  cursor: pointer;
}
</style>