function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const total = classPoints.reduce((a, b) => a + b, 0);

  var avg = total / classPoints.length;

  const result = yourPoints > avg ? true : false;

  return result;
}
