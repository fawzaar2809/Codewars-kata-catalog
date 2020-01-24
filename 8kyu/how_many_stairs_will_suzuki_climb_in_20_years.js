function stairsIn20(s) {
  //var merged = [].concat.apply([], s);

  //const result = merged.reduce((total, value) => total + value, 0);

  //return result * 20;

  //var sum = 0;
  //for (var i = 0; i < s.length; i++) {
  //  for (var j = 0; j < s[i].length; j++) {
  //    sum += s[i][j];
  //  }
  // }
  // return sum * 20;

  const result = s.reduce(
    (sum, value) => (sum += value.reduce((total, val) => (total += val), 0)),
    0
  );

  return result * 20;
}
