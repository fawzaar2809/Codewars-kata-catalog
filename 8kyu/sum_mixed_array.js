function sumMix(x) {
  //var sum = 0;

  //for(var i = 0; i < x.length; i++){
  //    sum += parseInt(x[i]);
  //}

  //return sum;

  const result = x.map(x => parseInt(x)).reduce((sum, x) => sum + x, 0);
  return result;
}
