<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  suggestions: string[],
}>();

const model = defineModel("");

const onSuggestionClicked = (suggestion: string) => {
  model.value = "";
};

</script>

<template>
  <div class="search-container">
    <input type="search" placeholder="np. tofu" class="search" name="q" autocomplete="off" v-model="model">
    <div v-show="model" class="suggestions">
      <div v-for="ingredient in suggestions" :key="ingredient" class="suggestion"
           @click="onSuggestionClicked(ingredient)">
        {{ ingredient }}
      </div>
      <div v-show="suggestions.length == 0" class="suggestion" @click="onSuggestionClicked('')">Nie znaleziono.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
