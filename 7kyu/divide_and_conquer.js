function divCon(x){
    var num = [];
    var str= [];
  
    const tempNum = x.filter(e => typeof e == 'number');
    const tempStr = x.filter(e => typeof e == 'string');
  
    console.log('tempNum', tempNum);
    console.log('tempStr', tempStr);
  
    const sumNum = tempNum.reduce((a, b) => a + b, 0);
    console.log('sumNum', sumNum);
  
  
    const strToNum = tempStr.map(Number);
  
    console.log('strToNum', strToNum);
  
    const sumInt = strToNum.reduce((a, b)=> a + b, 0);
  
    console.log('sumInt', sumInt);
  
    return sumNum - sumInt;
  }