function highAndLow(numbers) {
  var newList = numbers.split(" ");
  console.log("newList", newList);

  var max = Math.max.apply(null, newList);
  console.log(max);

  var min = Math.min.apply(null, newList);
  console.log(min);

  console.log(max + " " + min);

  return max + " " + min;
}
