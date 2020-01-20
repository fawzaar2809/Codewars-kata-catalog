function spinWords(s){
    //TODO Have fun :)
    var newArray = s.split(' ');
  
    for (var i = 0; i < newArray.length; i++) {
          if(newArray[i].length >= 5) {
              newArray[i] = newArray[i].split('').reverse().join('');
          }        
    }
    
   return newArray.join(' ');
  }