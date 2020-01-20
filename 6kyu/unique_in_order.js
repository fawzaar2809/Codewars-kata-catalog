var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var temp = [];
    
    if (Array.isArray(iterable) === false) {
            temp = iterable.split('');
    } else {
            temp = iterable; 
    }
    
    var result = [];
    
    for (var i = 0; i < temp.length; i++) {
        if(temp[i] != temp[i -1]) {
          result.push(temp[i]);
      }
    }
    
    return result;
    
  }