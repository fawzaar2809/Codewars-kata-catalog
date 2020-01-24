function abbrevName(name) {
  name = name.split(" ");
  var first;
  var second;
  var result;

  for (var i = 0; i < name.length; name++) {
    first = name[i][0];
    second = name[i + 1][0];

    result = first.toUpperCase() + "." + second.toUpperCase();
  }

  return result;
}
