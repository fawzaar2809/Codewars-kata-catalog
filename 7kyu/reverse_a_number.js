function reverseNumber(n) {
  var num = n
    .toString()
    .split("")
    .reverse()
    .join("");

  var result = parseFloat(num) * Math.sign(n);

  return result;
}
