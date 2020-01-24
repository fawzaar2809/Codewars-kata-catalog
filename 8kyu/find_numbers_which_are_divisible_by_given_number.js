function divisibleBy(numbers, divisor) {
  var result = numbers.filter(function(number) {
    return number % divisor === 0;
  });

  return result;

  //var result = [];

  //for (var i = 0; i < numbers.length; i++) {
  //    if( numbers[i] % divisor === 0 ){
  //         result.push(numbers[i]);
  // }
  //}
  //return result;
}
