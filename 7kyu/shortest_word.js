function findShort(s) {
  let wordsLength = [];

  var newArray = s.split(" ");

  for (var i = 0; i < newArray.length; i++) {
    wordsLength.push(newArray[i].length);
  }

  const min = Math.min(...wordsLength);

  return min;
}
