function reverse(str){
    var temp = str.trim().split(' ');
    
    const rev = temp.map(function(e, i) {
          return i % 2 !== 0 ? temp[i].split('').reverse().join('') : e;
    });
  
    
    return rev.join(' ');
    
  }