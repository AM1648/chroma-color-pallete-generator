<template>
  <div class="palette-grid">
    <ColorCard
      v-for="(color, index) in colors"
      :key="index"
      :color="color"
      @update="(hex) => $emit('update', index, hex)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types';
import ColorCard from './ColorCard.vue';

defineProps<{
  colors: Color[];
}>();

defineEmits<{
  update: [index: number, hex: string];
}>();
</script>

<style lang="scss" scoped>
.palette-grid {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>
