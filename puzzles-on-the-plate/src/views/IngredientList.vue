<script setup lang="ts">

import type {Ingredient} from "@/service/puzzle/types";

const props = defineProps<{
  ingredients: Ingredient[],
}>();

</script>

<template>
  <div>
    <div v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient">
      <span>{{ ingredient.quantityDescription }}</span>
    </div>
  </div>
</template>

