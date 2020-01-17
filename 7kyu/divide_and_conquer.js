function divCon(x){
  const tempNum = x.filter(e => typeof e == 'number');
  const tempStr = x.filter(e => typeof e == 'string');

  const sumNum = tempNum.reduce((a, b) => a + b, 0);


  const strToNum = tempStr.map(Number);

  const sumInt = strToNum.reduce((a, b)=> a + b, 0);

  return sumNum - sumInt;
}