function findUniq(arr) {
  // do magic
  const uniqueArr = [];

  const sortArr = arr.sort((a, b) => a - b);

  for (var i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== sortArr[i + 1] && sortArr[i] !== sortArr[i - 1]) {
      uniqueArr.push(sortArr[i]);
    }
  }

  return uniqueArr[0];
}
