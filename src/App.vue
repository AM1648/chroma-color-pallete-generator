<template>
  <AppHeader @generate="regenerate" />
  <PaletteGrid :colors="colors" />
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import PaletteGrid from './components/palette/PaletteGrid.vue';
import { usePalette } from './composables/usePalette';

const { colors, regenerate } = usePalette();
</script>

<style lang="scss" scoped>
// No styles needed - full page handled by children
</style>
