<template>
  <AppHeader
    @generate="regenerate"
    @harmonyChange="handleHarmonyChange"
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

const { colors, regenerate, updateColor, setHarmonyType } = usePalette();

function handleHarmonyChange(type: 'none' | 'monochromatic' | 'complementary' | 'analogous' | 'triadic' | 'square') {
  setHarmonyType(type);
}
</script>
