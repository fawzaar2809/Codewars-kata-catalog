function comp(array1, array2) {
  //your code here
  if (!array1 || !array2) return false;

  const a1 = [...array1].sort((a, b) => a - b);
  const a2 = [...array2].sort((a, b) => a - b);
  const res = a1.map(num => Math.pow(num, 2));

  return JSON.stringify(res) === JSON.stringify(a2);
}
