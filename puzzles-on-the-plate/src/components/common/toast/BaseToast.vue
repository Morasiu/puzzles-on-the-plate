<script setup lang="ts">

import {useToast} from "@/components/common/toast/toast";
import {watch} from "vue";

const {isToastActive, messageRef, timeoutRef} = useToast();

watch(isToastActive, (value) => {
  if (value) trigger();
})

const trigger = () => setTimeout(() => {
  isToastActive.value = false;
}, timeoutRef.value);

</script>

<template>
  <div v-if="isToastActive" class="toast">
    <span class="message">{{ messageRef }}</span>
  </div>
</template>

<style scoped lang="scss">
.toast {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  max-width: fit-content;
  background-color: #22bb33;
  color: white;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
</style>