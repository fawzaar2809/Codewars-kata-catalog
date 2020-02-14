function maxProduct(numbers, size) {
  //your code here
  return (res = numbers
    .sort((a, b) => b - a)
    .filter((e, i) => i < size)
    .map(e => {
      return e;
    })
    .reduce((a, b) => a * b));
}
