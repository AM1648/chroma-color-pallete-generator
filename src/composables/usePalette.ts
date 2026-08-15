import { ref } from 'vue';
import { generatePalette } from '../utils/colors';
import type { Color } from '../types';

const DEFAULT_COUNT = 5;

export function usePalette() {
  const colors = ref<Color[]>(
    generatePalette(DEFAULT_COUNT).map(hex => ({ hex }))
  );

  function regenerate() {
    colors.value = generatePalette(colors.value.length).map(hex => ({ hex }));
  }

  function updateColor(index: number, newHex: string) {
    if (index >= 0 && index < colors.value.length) {
      colors.value[index].hex = newHex;
    }
  }

  return { colors, regenerate, updateColor };
}
