function findDifference(a, b) {
  var result = a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y);
  return Math.abs(result);
}
