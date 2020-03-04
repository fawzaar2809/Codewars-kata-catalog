function mean(lst) {
  //your code here

  const num = lst.filter(e => {
    return parseInt(e) == e;
  });

  const str = lst.filter(e => {
    return !(parseInt(e) == e);
  });

  const temp = num.map(Number);
  //console.log('temp', temp);

  const mean = temp.reduce((a, b) => a + b, 0) / temp.length;

  //console.log('mean', mean);

  //console.log('str', str.join(''));

  return [mean, str.join("")];
}
