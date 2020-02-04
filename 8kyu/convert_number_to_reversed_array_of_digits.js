function digitize(n) {
  //code here
  //var num = 15;
  //var n = num.toString().split("").reverse().map(Number);

  return n
    .toString()
    .split("")
    .reverse()
    .map(Number);
}
