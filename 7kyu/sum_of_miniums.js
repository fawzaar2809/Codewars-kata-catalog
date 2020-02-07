function sumOfMinimums(arr) {
  const temp = [];
  const arrSort = [];

  arr.forEach(function(e) {
    temp.push(e.sort((a, b) => a - b));
    console.log(temp);
  });

  for (var i = 0; i < temp.length; i++) {
    arrSort.push(temp[i][0]);
  }

  const total = arrSort.reduce((a, b) => a + b, 0);

  return total;
}
