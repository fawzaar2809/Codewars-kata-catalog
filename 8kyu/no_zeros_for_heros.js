function noBoringZeros(n) {
  const temp = n.toString().split("");

  if (temp[0] === "0") {
    return parseInt(temp.join(""));
  }

  for (var i = temp.length - 1; i > 0; i--) {
    if (temp[i] === "0") {
      temp.splice(i, 1);
    } else {
      return parseInt(temp.join(""));
    }
  }
}
