<template>
  <AppHeader
    :color-count="colorCount"
    @generate="regenerate"
    @harmonyChange="handleHarmonyChange"
    @color-count-change="setColorCount"
    @add-color="addColor"
    @remove-color="removeColor"
  />

  <PaletteGrid
    :colors="colors"
    @update="updateColor"
  />
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import PaletteGrid from './components/palette/PaletteGrid.vue';
import { usePalette } from './composables/usePalette';

const {
  colors,
  colorCount,
  regenerate,
  updateColor,
  setHarmonyType,
  setColorCount,
  addColor,
  removeColor
} = usePalette();

function handleHarmonyChange(
  type: 'none' | 'complementary' | 'analogous'
) {
  setHarmonyType(type);
}
</script>
