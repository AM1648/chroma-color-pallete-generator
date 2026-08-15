import { ref } from 'vue';
import { generatePalette } from '../utils/colors';
import { generateHarmonyPalette } from '../utils/harmony';
import type { Color } from '../types';

const MINIMUM_COLORS = 1;
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

  function generateHarmony(targetCount = colors.value.length) {
    // Use random base
    const baseHex = generatePalette(1)[0];

    const harmonyColors = generateHarmonyPalette(baseHex, harmonyType.value as 'complementary' | 'analogous');

    if (harmonyColors.length === 0) return;

    colors.value = Array.from({ length: targetCount }, (_, i) => ({
      hex: harmonyColors[i % harmonyColors.length]
    }));
  }

  function addColor() {
    if (harmonyType.value === 'none') {
      colors.value.push({ hex: generatePalette(1)[0] });
      return;
    }

    generateHarmony(colors.value.length + 1);
  }

  function removeColor() {
    if (colors.value.length <= MINIMUM_COLORS) return;

    colors.value = colors.value.slice(0, -1);
  }

  function setHarmonyType(type: 'none' | 'complementary' | 'analogous') {
    harmonyType.value = type;
  }

  function updateColor(index: number, newHex: string) {
    if (index >= 0 && index < colors.value.length) {
      colors.value[index].hex = newHex;
    }
  }

  return {
    colors,
    regenerate,
    addColor,
    removeColor,
    setHarmonyType,
    harmonyType,
    updateColor
  };
}
