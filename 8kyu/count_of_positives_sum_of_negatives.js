function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];

  var posCount = 0;
  var sumNeg = 0;
  var final = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posCount += 1;
    } else if (input[i] < 0) {
      sumNeg += input[i];
    }
  }

  final[0] = posCount;
  final[1] = sumNeg;

  return final;
}
