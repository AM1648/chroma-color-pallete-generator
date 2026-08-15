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

export function generateHarmonyPalette(baseHex: string, type: 'complementary' | 'analogous'): string[] {
  const color = new TinyColor(baseHex);
  if (!color.isValid) return [];
  
  switch (type) {
    case 'complementary':
      return generateComplementary(baseHex);
    case 'analogous':
      return generateAnalogous(baseHex);
    default:
      return [];
  }
}
