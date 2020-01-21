function solution(number) {
  array1 = [];
  array2 = [];

  for (var i = 0; i < number; i++) {
    if (i % 3 === 0) {
      array1.push(i);
    }

    if (i % 5 === 0) {
      array2.push(i);
    }
  }

  const newArray = [...new Set(array1.concat(array2))];

  const sum = newArray.reduce((a, b) => a + b, 0);

  return sum;
}
