function sumDigits(number) {
  const temp = number.toString().replace(/-/g, "").split('');

  const sum = temp
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
  
  return sum;
}