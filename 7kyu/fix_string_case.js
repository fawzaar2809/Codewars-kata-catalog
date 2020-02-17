function solve(s) {
  const upper = s.split("").filter(e => e.match(/[A-Z]/)).length;
  const lower = s.split("").filter(e => e.match(/[a-z]/)).length;

  return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}
