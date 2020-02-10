function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter(e => {
    return e % 2 === 0;
  });
}
