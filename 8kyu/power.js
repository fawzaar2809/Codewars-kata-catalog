function numberToPower(number, power) {
  // Code here

  if (power === 0) {
    return 1;
  } else {
    return number * numberToPower(number, power - 1);
  }
}
