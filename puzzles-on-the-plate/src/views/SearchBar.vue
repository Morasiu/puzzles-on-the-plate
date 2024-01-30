<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
  suggestions: string[],
}>();

const model = defineModel<string>({default: ""});

const emit = defineEmits<{
  (e: "search", value: string): void
}>();

const filteredSuggestions = computed(() => {
  return props.suggestions
      .filter(suggestion => suggestion.toLowerCase().includes(model.value.toLowerCase()))
      .sort()
      .slice(0, 5);
});

const onSuggestionClicked = (suggestion: string) => {
  model.value = "";
  emit("search", suggestion);
};

</script>

<template>
  <div class="search-container">
    <input type="search" placeholder="np. tofu" class="search" name="q" autocomplete="off" v-model="model">
    <div v-show="model" class="suggestions">
      <div v-for="ingredient in filteredSuggestions" :key="ingredient" class="suggestion"
           @click="onSuggestionClicked(ingredient)">
        {{ ingredient }}
      </div>
      <div v-show="filteredSuggestions.length == 0" class="suggestion" @click="onSuggestionClicked('')">Nie znaleziono.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-container {
  position: relative;
  .search {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 0.5rem;
    z-index: 1;
    .suggestion {
      padding: 0.25rem;
      background-color: white;
      border-radius: 0.5rem;
      &:hover {
        border-radius: 0.5rem;
        background-color: var(--primary);;
      }
    }
  }
}
</style>
