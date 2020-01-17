function vaporcode(string) {
    var temp = string.toUpperCase().split('');
  
    var res = [];
  
    for (var i = 0; i < temp.length; i++) {
          if(temp[i] !== ' '){ 
          res.push(temp[i])
      }
    }
  
    return res.join('  ');
}