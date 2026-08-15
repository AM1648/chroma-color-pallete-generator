<template>
  <div
    class="color-card"
    :style="{ backgroundColor: color.hex }"
  >
    <div class="color-values">
      <span
        class="hex"
        @click="copyHex"
        title="Click to copy hex color"
      >
        {{ copiedType === 'hex' ? 'Copied!' : color.hex }}
      </span>

      <span
        class="rgb"
        @click="copyRgb"
        title="Click to copy RGB color"
      >
        {{ copiedType === 'rgb' ? 'Copied!' : rgbValue }}
      </span>
    </div>

    <div class="actions">
      <button
        @click.stop="toggleLock"
        class="action-btn"
        :title="color.locked ? 'Unlock color' : 'Lock color'"
      >
        {{ color.locked ? 'Locked' : 'Lock' }}
      </button>

      <button
        @click.stop="openEditor"
        class="action-btn"
        title="Edit color"
      >
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
import { computed, ref } from 'vue';
import type { Color } from '../../types';
import ColorWheelModal from '../modals/ColorWheelModal.vue';

const props = defineProps<{
  color: Color;
}>();

const emit = defineEmits<{
  update: [hex: string];
  'toggle-lock': [];
}>();

const showModal = ref(false);
const copiedType = ref<'hex' | 'rgb' | null>(null);

const rgbValue = computed(() => {
  const hex = props.color.hex.replace('#', '');
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);

  return `rgb(${red}, ${green}, ${blue})`;
});

function openEditor() {
  showModal.value = true;
}

function toggleLock() {
  emit('toggle-lock');
}

async function copyToClipboard(value: string, type: 'hex' | 'rgb') {
  try {
    await navigator.clipboard.writeText(value);

    copiedType.value = type;

    window.setTimeout(() => {
      if (copiedType.value === type) {
        copiedType.value = null;
      }
    }, 1200);
  } catch (error) {
    console.error(`Failed to copy ${type} color to clipboard:`, error);
  }
}

function copyHex() {
  return copyToClipboard(props.color.hex, 'hex');
}

function copyRgb() {
  return copyToClipboard(rgbValue.value, 'rgb');
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

  .color-values {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;

    .hex,
    .rgb {
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      backdrop-filter: blur(4px);
      user-select: none;
      cursor: pointer;
    }

    .rgb {
      font-size: 0.8rem;
    }
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