function accum(s) {
  var newArray = s.toLowerCase().split("");

  console.log(newArray);

  for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);

    newArray[i] = newArray[i].toUpperCase() + newArray[i].repeat(i);

    console.log(newArray[i]);
  }

  console.log(newArray.join("-"));

  return newArray.join("-");
}
