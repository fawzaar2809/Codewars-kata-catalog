function XO(str) {
    const temp = str.toLowerCase().split("");
  
    const exes = temp.filter(e => {
      if(e.includes('o')) {
        return e;
      }
    })
  
    const ohs = temp.filter(e => {
      if(e.includes('x')) {
        return e;
      }
    })
  
    const res = exes.length === ohs.length || (exes.length === 0 && ohs.length === 0)? true : false;
  
    return res;
  }