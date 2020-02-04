function find_average(array) {
  // your code here
  var count = array.length;
  var sum = 0;
  var avg;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return (avg = sum / count);
}
