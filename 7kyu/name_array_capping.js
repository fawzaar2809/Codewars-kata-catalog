function capMe(names) {
  const arr1 = names.map(e => {
    return e.toLowerCase();
  });
  const newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
  }

  return newArr;
}
