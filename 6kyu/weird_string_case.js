function toWeirdCase(string){
    var newArray = string.split(' ');
  
    var result = [];
    var finalResult = [];
    
    for (var i = 0; i < newArray.length; i++) {
      let temp = newArray[i].split('');
  
      for (var j = 0; j < temp.length; j++) {
              if (j % 2 === 0) {
                  temp[j] = temp[j].toUpperCase();
              } else {
                  temp[j] = temp[j].toLowerCase();
              }
          }
         
      result.push(temp);
    }
    
    for (var i = 0; i < result.length; i++) {
            finalResult.push(result[i].join(''));
    }
    
    return finalResult.join(' ');
}