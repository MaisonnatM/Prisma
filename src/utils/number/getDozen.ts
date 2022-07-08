export const getDozen = (n: number) => {
  if (n % 10 > 4) {
    return Math.ceil(n / 10) * 10
  }

  return Math.ceil(n / 10) * 10
}
