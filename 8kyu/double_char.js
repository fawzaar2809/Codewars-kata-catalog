function doubleChar(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    result += str.charAt(i).repeat(2);
  }

  return result;
}
