<template>
  <header class="app-header">
    <h1>🎨 Color Palette Generator</h1>

    <div class="controls">
      <label>
        Harmony
        <select v-model="selectedHarmony" @change="onHarmonyChange">
          <option value="none">Random</option>
          <option value="complementary">Complementary</option>
          <option value="analogous">Analogous</option>
        </select>
      </label>

      <button @click="$emit('generate')">Generate</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{
  generate: [];
  harmonyChange: [type: 'none' | 'complementary' | 'analogous'];
}>();

const selectedHarmony = ref<'none' | 'complementary' | 'analogous'>('none');

function onHarmonyChange() {
  emit('harmonyChange', selectedHarmony.value);
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  z-index: 10;
  border-bottom: 1px solid rgba(0,0,0,0.05);

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .controls {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
    }

    select {
      padding: 0.4rem 0.8rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 0.9rem;
      background: white;
    }

    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 8px;
      background: #1a1a1a;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
