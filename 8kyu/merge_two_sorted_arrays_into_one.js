function mergeArrays(arr1, arr2) {
  const temp = arr1.concat(arr2);

  console.log(temp);

  const temp1 = temp.filter((e, i) => temp.indexOf(e) === i);

  console.log(temp1);

  return temp1.sort((a, b) => {
    return a - b;
  });
}
