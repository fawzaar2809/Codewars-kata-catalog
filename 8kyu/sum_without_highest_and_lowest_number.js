function sumArray(array) {
  if (array === null || array.length <= 1) {
    return 0;
  }

  var lowestValue = Math.min(...array);
  var highestValue = Math.max(...array);
  var sumLowestHighest = lowestValue + highestValue;

  var result = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  result = result - sumLowestHighest;
  return result;
}
