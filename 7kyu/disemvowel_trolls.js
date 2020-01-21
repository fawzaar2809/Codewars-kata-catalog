function disemvowel(str) {
  var strArray = str.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  console.log(strArray);

  var result = strArray.filter(function(e) {
    return !vowels.includes(e);
  });

  return result.join("");
}
