function sumTwoSmallestNumbers(numbers) {
  //Code here
  const arrSort = numbers.sort((a, b) => a - b);

  const sum = numbers.slice(0, 2).reduce((a, b) => a + b, 0);

  return sum;
}
