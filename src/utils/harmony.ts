import { TinyColor } from '@ctrl/tinycolor';

export function generateComplementary(baseHex: string): string[] {
  const base = new TinyColor(baseHex);
  const complementary = base.clone().spin(180);
  return [base.toHexString(), complementary.toHexString()];
}

export function generateAnalogous(baseHex: string): string[] {
  const base = new TinyColor(baseHex);
  return [
    base.clone().spin(-60).toHexString(),
    base.clone().spin(-30).toHexString(),
    base.toHexString(),
    base.clone().spin(30).toHexString(),
    base.clone().spin(60).toHexString()
  ];
}

export function generateMonochromatic(baseHex: string): string[] {
  const base = new TinyColor(baseHex);
  return [
    base.clone().lighten(40).toHexString(),
    base.clone().lighten(20).toHexString(),
    base.toHexString(),
    base.clone().darken(20).toHexString(),
    base.clone().darken(40).toHexString()
  ];
}

export function generateTriadic(baseHex: string): string[] {
  const base = new TinyColor(baseHex);
  return [
    base.toHexString(),
    base.clone().spin(120).toHexString(),
    base.clone().spin(240).toHexString()
  ];
}

export function generateSquare(baseHex: string): string[] {
  const base = new TinyColor(baseHex);
  return [
    base.toHexString(),
    base.clone().spin(90).toHexString(),
    base.clone().spin(180).toHexString(),
    base.clone().spin(270).toHexString()
  ];
}

export function generateHarmonyPalette(baseHex: string, type: string): string[] {
  const color = new TinyColor(baseHex);
  if (!color.isValid) return [];

  switch (type) {
    case 'complementary':
      return generateComplementary(baseHex);
    case 'analogous':
      return generateAnalogous(baseHex);
    case 'monochromatic':
      return generateMonochromatic(baseHex);
    case 'triadic':
      return generateTriadic(baseHex);
    case 'square':
      return generateSquare(baseHex);
    default:
      return [];
  }
}
