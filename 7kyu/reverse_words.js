function reverseWords(str) {
  var words = str.split(" ");
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(
      words[i]
        .split("")
        .reverse()
        .join("")
    );
  }

  return result.join(" ");
}
