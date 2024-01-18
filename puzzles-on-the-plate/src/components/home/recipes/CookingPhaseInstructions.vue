<script setup lang="ts">

const props = defineProps<{
  title: string,
  instructions: string[]
}>()

</script>

<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <div class="instructions">
      <span v-for="(instruction, index) in instructions" :key="instruction">
      {{ index + 1 }}. {{ instruction }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50rem;
  @media (max-width: 480px) {
    width: 100%;
  }

  .instructions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}

</style>
