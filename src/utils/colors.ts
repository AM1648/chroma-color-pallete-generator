export function generateRandomHex(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export function generatePalette(count: number): string[] {
  return Array.from({ length: count }, () => generateRandomHex());
}