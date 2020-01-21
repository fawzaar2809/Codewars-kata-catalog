function rowWeights(array) {
  const even = array.filter(function(e, i) {
    return i % 2 != 0;
  });

  const odd = array.filter(function(e, i) {
    return i % 2 == 0;
  });

  console.log("oddArray", odd);
  console.log("evenArray", even);

  const totalOdd = odd.reduce((a, b) => a + b, 0);
  const totalEven = even.reduce((a, b) => a + b, 0);

  console.log("totalOdd", totalOdd);
  console.log("totalEven", totalEven);
  console.log([totalOdd, totalEven]);

  return [totalOdd, totalEven];
}
