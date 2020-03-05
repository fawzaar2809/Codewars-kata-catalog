function maxedOut(arr) {
  // --> Push it to the limit

  const sum = arr.reduce((a, b) => a + b * b * b, 0);

  if (sum > Number.MAX_SAFE_INTEGER) return "You've pushed me to the max!";
  return sum;
}
