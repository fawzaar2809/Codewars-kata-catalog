function adjacentElementsProduct(array) {
  let total = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < array.length; i++) {
    console.log(array[i], array[i + 1]);
    if (array[i] * array[i + 1] > total) total = array[i] * array[i + 1];
    console.log(total);
  }

  return total;
}
