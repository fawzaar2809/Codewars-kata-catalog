function deleteNth(arr, n) {
  const rpt = {};

  return arr.filter(num => {
    rpt[num] = (rpt[num] || 0) + 1;
    const repetitions = rpt[num];

    return repetitions <= n;
  });
}
