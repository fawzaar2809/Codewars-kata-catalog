function stringy(size) {
  var result = "";

  for (var i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}
