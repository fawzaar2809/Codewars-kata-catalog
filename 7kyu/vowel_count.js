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

/* function getCount(str) {
  var strArray = str.split("");

  let vowels = ["a", "e", "i", "o", "u"];

  const result = strArray.filter(function(e) {
    return vowels.includes(e);
  });

  return result.length;
}
 */
