<template>
  <div class="color-card" :style="{ backgroundColor: color.hex }">
    <span class="hex">{{ color.hex }}</span>

    <div class="actions">
      <button @click="openEditor" class="action-btn" title="Edit color">
        ✏️
      </button>
    </div>

    <ColorWheelModal
      :visible="showModal"
      :current-color="color.hex"
      @close="showModal = false"
      @update="handleUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Color } from '../../types';
import ColorWheelModal from '../modals/ColorWheelModal.vue';

const props = defineProps<{
  color: Color;
}>();

const emit = defineEmits<{
  update: [hex: string];
}>();

const showModal = ref(false);

function openEditor() {
  showModal.value = true;
}

function handleUpdate(newHex: string) {
  emit('update', newHex);
}
</script>

<style lang="scss" scoped>
.color-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  .hex {
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    backdrop-filter: blur(4px);
  }

  .actions {
    position: absolute;
    bottom: 2rem;
    display: flex;
    gap: 0.5rem;

    .action-btn {
      padding: 0.5rem 0.8rem;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.1rem;
      backdrop-filter: blur(4px);
      transition: background 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>
