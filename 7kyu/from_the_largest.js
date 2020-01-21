function maxNumber(n) {
  //your code here
  var result = n
    .toString()
    .split("")
    .sort()
    .reverse()
    .join("");

  return Number(result);
}
