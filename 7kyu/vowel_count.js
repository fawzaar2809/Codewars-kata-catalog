function getCount(str) {
  var vowelsCount = 0;

  var vowelsList = ["a", "e", "i", "o", "u"];

  for (let letter of str.toLowerCase()) {
    if (vowelsList.includes(letter)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
