export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
