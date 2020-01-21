function removeDuplicateWords(s) {
  var newArray = s.split(" ");

  let unique = [...new Set(newArray)];

  return unique.toString().replace(/,/g, " ");
}
