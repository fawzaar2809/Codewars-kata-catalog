function duplicates(array) {
  //Make the magic happen
  let temp = array.sort();
  console.log("array", array);

  let count = 0;

  for (var i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i + 1]) {
      count++;
      temp[i] = "";
      temp[i + 1] = "";
    }
  }

  console.log(count);

  return count;
}
