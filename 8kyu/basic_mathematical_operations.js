function basicOp(operation, value1, value2) {
  // Code
  var value = 0;

  if (operation == "+") {
    value = value1 + value2;
  } else if (operation == "-") {
    value = value1 - value2;
  } else if (operation == "*") {
    value = value1 * value2;
  } else if (operation == "/") {
    value = value1 / value2;
  }

  return value;
}
