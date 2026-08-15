<template>
  <AppHeader
    :color-count="colors.length"
    @generate="regenerate"
    @harmonyChange="handleHarmonyChange"
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
  regenerate,
  updateColor,
  setHarmonyType,
  addColor,
  removeColor
} = usePalette();

function handleHarmonyChange(type: 'none' | 'complementary' | 'analogous') {
  setHarmonyType(type);
}
</script>
