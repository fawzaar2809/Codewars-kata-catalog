function order(words) {
  if (!words) return "";

  return words
    .split(" ")
    .map(word => word.match(/\d+/))
    .sort((a, b) => a[0] - b[0])
    .map(word => word.input)
    .join(" ");
}
