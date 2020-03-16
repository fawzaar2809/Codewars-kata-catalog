function uniqueNumbers(numbersArray) {
  //you must return unique numbers array

  let unique = [...new Set(numbersArray)];

  return unique;
}
