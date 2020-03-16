function evenLast(numbers) {
  // Good luck

  const temp = numbers.filter((e, i) => {
    return i % 2 === 0;
  });

  const last = numbers[numbers.length - 1];

  return numbers.length === 0 ? 0 : temp.reduce((a, b) => a + b, 0) * last;
}
