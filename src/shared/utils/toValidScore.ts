export function toValidScore(value: number | null | undefined): 0 | 1 | 2 | 3 | 4 | 5 {
  if (value == null) return 0;
  if (value < 0) return 0;
  if (value > 5) return 5;
  return value as 0 | 1 | 2 | 3 | 4 | 5;
}
