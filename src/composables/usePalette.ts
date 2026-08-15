import { ref } from 'vue';
import { generatePalette } from '../utils/colors';
import { generateHarmonyPalette } from '../utils/harmony';
import type { Color } from '../types';

const DEFAULT_COUNT = 5;

export function usePalette() {
  const colors = ref<Color[]>(
    generatePalette(DEFAULT_COUNT).map(hex => ({ hex }))
  );

  const harmonyType = ref<'none' | 'complementary' | 'analogous'>('none');

  function regenerate() {
    if (harmonyType.value === 'none') {
      colors.value = generatePalette(colors.value.length).map(hex => ({ hex }));
    } else {
      generateHarmony();
    }
  }

  function generateHarmony() {
    // Use random base
    const baseHex = generatePalette(1)[0];

    const harmonyColors = generateHarmonyPalette(baseHex, harmonyType.value as 'complementary' | 'analogous');

    if (harmonyColors.length === 0) return;

    const targetCount = colors.value.length;
    colors.value = Array.from({ length: targetCount }, (_, i) => ({
      hex: harmonyColors[i % harmonyColors.length]
    }));
  }

  function setHarmonyType(type: 'none' | 'complementary' | 'analogous') {
    harmonyType.value = type;
  }

  function updateColor(index: number, newHex: string) {
    if (index >= 0 && index < colors.value.length) {
      colors.value[index].hex = newHex;
    }
  }

  return { colors, regenerate, setHarmonyType, harmonyType, updateColor };
}
