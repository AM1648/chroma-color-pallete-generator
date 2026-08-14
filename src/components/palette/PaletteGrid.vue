<template>
  <div class="palette-grid">
    <ColorCard v-for="color in colors" :key="color" :color="color" />
  </div>
</template>

<script setup lang="ts">
import ColorCard from './ColorCard.vue';

defineProps<{ colors: string[] }>();
</script>

<style lang="scss" scoped>
.palette-grid {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>