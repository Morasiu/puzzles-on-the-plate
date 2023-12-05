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
    <div v-if="recipe">

    </div>
    <div v-else>
      Ładowanie...
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .recipe {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
