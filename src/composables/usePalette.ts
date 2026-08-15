import { ref } from 'vue';
import { generatePalette } from '../utils/colors';
import { generateHarmonyPalette } from '../utils/harmony';
import type { Color } from '../types';

const MIN_COUNT = 1;
const DEFAULT_COUNT = 5;

export function usePalette() {
  const colorCount = ref(DEFAULT_COUNT);

  const colors = ref<Color[]>(
    generatePalette(colorCount.value).map(hex => ({
      hex,
      locked: false
    }))
  );

  const harmonyType = ref<'none' | 'monochromatic' | 'complementary' | 'analogous' | 'triadic' | 'square'>('none');

  function regenerate() {
    if (harmonyType.value === 'none') {
      const generatedColors = generatePalette(colorCount.value);

      colors.value = generatedColors.map((hex, index) => {
        const currentColor = colors.value[index];

        if (currentColor?.locked) {
          return currentColor;
        }

        return {
          hex,
          locked: false
        };
      });

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

    const nextColors = Array.from(
      { length: colorCount.value },
      (_, index) => ({
        hex:
          harmonyColors[
            index % harmonyColors.length
          ],
        locked: false
      })
    );

    colors.value = nextColors.map((color, index) => {
      const currentColor = colors.value[index];

      return currentColor?.locked
        ? currentColor
        : color;
    });
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
        hex: newColor,
        locked: false
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

  function toggleColorLock(index: number) {
    if (
      index < 0 ||
      index >= colors.value.length
    ) {
      return;
    }

    colors.value[index].locked =
      !colors.value[index].locked;
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
    updateColor,
    toggleColorLock
  };
}
