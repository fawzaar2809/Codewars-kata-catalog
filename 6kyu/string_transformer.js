function stringTransformer(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var array = str.split("");

  const result = array.map(e =>
    upper.indexOf(e) === -1 ? e.toUpperCase() : e.toLowerCase()
  );

  console.log(
    result
      .join("")
      .split(" ")
      .reverse()
      .join(" ")
  );

  return result
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
