function solve(s) {
  //..
  let temp = s
    .split(``)
    .sort()
    .map(v => v.charCodeAt());

  return (
    temp.map((v, i, arr) => v + 1 === arr[i + 1]).filter(v => v === false)
      .length < 2
  );
}
