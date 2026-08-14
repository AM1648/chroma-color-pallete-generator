import { ref } from 'vue';
import { generatePalette } from '../utils/colors';

const DEFAULT_COUNT = 5;

export function usePalette() {
  const colors = ref<string[]>(generatePalette(DEFAULT_COUNT));

  function regenerate() {
    colors.value = generatePalette(colors.value.length);
  }

  return { colors, regenerate };
}