import { ref } from 'vue';
import { generatePalette } from '../utils/colors';
import { generateHarmonyPalette } from '../utils/harmony';
import type { Color } from '../types';

const MIN_COUNT = 1;
const DEFAULT_COUNT = 5;

type HarmonyType =
  | 'none'
  | 'complementary'
  | 'analogous';

export function usePalette() {
  const colorCount = ref(DEFAULT_COUNT);

  const colors = ref<Color[]>(
    generatePalette(colorCount.value).map(hex => ({
      hex
    }))
  );

  const harmonyType = ref<'none' | 'monochromatic' | 'complementary' | 'analogous' | 'triadic' | 'square'>('none');

  function regenerate() {
    if (harmonyType.value === 'none') {
      colors.value = generatePalette(
        colorCount.value
      ).map(hex => ({
        hex
      }));

      return;
    }

    generateHarmony();
  }

  function generateHarmony() {
    const baseHex = generatePalette(1)[0];

    const harmonyColors = generateHarmonyPalette(
      baseHex,
      harmonyType.value as
        | 'monochromatic'
        | 'complementary'
        | 'analogous'
        | 'triadic' 
        | 'square'
    );

    if (harmonyColors.length === 0) {
      return;
    }

    colors.value = Array.from(
      { length: colorCount.value },
      (_, index) => ({
        hex:
          harmonyColors[
            index % harmonyColors.length
          ]
      })
    );
  }

  function setColorCount(count: number) {
    if (!Number.isFinite(count)) {
      return;
    }

    const normalizedCount = Math.max(
      MIN_COUNT,
      Math.trunc(count)
    );

    colorCount.value = normalizedCount;
    regenerate();
  }

  function addColor() {
    colorCount.value += 1;

    if (harmonyType.value === 'none') {
      const newColor = generatePalette(1)[0];

      colors.value.push({
        hex: newColor
      });

      return;
    }

    generateHarmony();
  }

  function removeColor() {
    if (colorCount.value <= MIN_COUNT) {
      return;
    }

    colorCount.value -= 1;

    if (harmonyType.value === 'none') {
      colors.value = colors.value.slice(
        0,
        colorCount.value
      );

      return;
    }

    generateHarmony();
  }

  function setHarmonyType(type: 'none' | 'monochromatic' | 'complementary' | 'analogous' | 'triadic' | 'square') {
    harmonyType.value = type;
  }

  function updateColor(
    index: number,
    newHex: string
  ) {
    if (
      index >= 0 &&
      index < colors.value.length
    ) {
      colors.value[index].hex = newHex;
    }
  }

  return {
    colors,
    colorCount,
    harmonyType,
    regenerate,
    setColorCount,
    addColor,
    removeColor,
    setHarmonyType,
    updateColor
  };
}
