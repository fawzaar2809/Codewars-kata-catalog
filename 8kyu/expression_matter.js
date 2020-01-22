function expressionMatter(a, b, c) {
  const largest = Math.max(a + b + c, (a + b) * c, a * (b + c), a * b * c);

  return largest;
}
