function last(x){
    const res = x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
  
    return res;
  }