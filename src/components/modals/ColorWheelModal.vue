<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>Edit Color</h2>

      <div class="picker-wrapper">
        <ChromePicker
          v-model="currentHex"
          :disable-alpha="true"
        />
      </div>

      <div class="actions">
        <button @click="close">Cancel</button>
        <button @click="apply" class="primary">Apply</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ChromePicker } from 'vue-color';
import 'vue-color/style.css';

const props = defineProps<{
  visible: boolean;
  currentColor: string;
}>();

const emit = defineEmits<{
  close: [];
  update: [color: string];
}>();

const currentHex = ref('#000000');

// Initialize from props
watch(() => props.currentColor, (newColor) => {
  if (newColor) {
    currentHex.value = newColor;
  }
}, { immediate: true });

watch(() => props.visible, (visible) => {
  if (visible && props.currentColor) {
    currentHex.value = props.currentColor;
  }
});

function handleColorChange(color: any) {
  currentHex.value = color.hex;
}

function close() {
  emit('close');
}

function apply() {
  emit('update', currentHex.value);
  close();
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 420px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .picker-wrapper {
    margin-bottom: 1.5rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;

    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;

      &.primary {
        background: #1a1a1a;
        color: white;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
