function multiplyAndFilter(array, multiplier) {
  // your code
  return array
    .filter(e => {
      return typeof e == "number";
    })
    .map(e => {
      return e * multiplier;
    });
}
