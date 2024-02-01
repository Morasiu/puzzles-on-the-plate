<script setup lang="ts">

import {computed} from "vue";
import type {Suggestion} from "@/components/common/search/types";



const props = defineProps<{
  suggestions: Suggestion[],
}>();

const model = defineModel<string>({default: ""});

const emit = defineEmits<{
  (e: "search", value: Suggestion): void
}>();

const filteredSuggestions = computed(() => {
  return props.suggestions
      .filter(suggestion => suggestion.label.toLowerCase().includes(model.value.toLowerCase()))
      .sort()
      .slice(0, 5);
});

const onSuggestionClicked = (suggestion: Suggestion) => {
  model.value = "";
  emit("search", suggestion);
};

</script>

<template>
  <div class="search-container">
    <input type="search" placeholder="np. tofu" class="search" name="q" autocomplete="off" v-model="model">
    <div v-show="model" class="suggestions">
      <div v-for="suggestion in filteredSuggestions" :key="suggestion.label" class="suggestion"
           @click="onSuggestionClicked(suggestion)">
        {{ suggestion.label }}
      </div>
      <div v-show="filteredSuggestions.length == 0" class="suggestion" @click="model = ''">Nie znaleziono.
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
