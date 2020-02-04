function squareSum(numbers) {
  /*return numbers.reduce(function(total, value) {
        return (value * value) + total;
    }, 0);*/

  /*const result = numbers.reduce((total, value) => total + (value*value), 0);
      return result;
    */

  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }

  return total;
}
