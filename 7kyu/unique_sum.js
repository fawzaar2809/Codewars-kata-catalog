function uniqueSum(lst) {
  //your magic code goes here

  const res = [...new Set(lst)];

  return lst.length > 0 ? res.reduce((a, b) => a + b, 0) : null;
}
