function invert(array) {
  //var array1 = [1, 4, 9, 16];
  //const map1 = array1.map(x => x * 2);

  if (array === []) {
    return array;
  } else {
    //return array.map(x => x > 0 ? x *(-1) : x * -1);

    return array.map(x => x * -1);
  }
  return array;
}
