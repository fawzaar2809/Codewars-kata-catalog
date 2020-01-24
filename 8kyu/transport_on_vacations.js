function rentalCarCost(d) {
  // Your solution here
  var totalRental = 0;

  if (d < 3) {
    totalRental = d * 40;
  } else if (d >= 3 && d < 7) {
    totalRental = d * 40 - 20;
  } else if (d >= 7) {
    totalRental = d * 40 - 50;
  }

  return totalRental;
}
