<template>
  <div class="color-card" :style="{ backgroundColor: color }">
    <span class="hex">{{ color }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ color: string }>();
</script>

<style lang="scss" scoped>
.color-card {
  flex: 1;
  display: flex;
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
}
</style>