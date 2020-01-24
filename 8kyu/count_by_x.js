function countBy(x, n) {
  var result = [];

  for (var i = 1; i <= n; i++) {
    result.push(i * x);
    console.log("result", result);
  }

  return result;
}
