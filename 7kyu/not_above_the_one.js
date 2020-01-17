function binaryCleaner(arr) {
    let req = [0, 1];;
    
    var result1 = [];
    var finalResult = [];
    
    for(var i = 0; i < arr.length; i++) {
            if(arr[i] == '0' || arr[i] == '1') {
              result1.push(arr[i]);
          }
    }	
  
    
    var result2 = [];
    
    for (var i = 0; i < arr.length; i++) {
            if(arr[i] != '0' && arr[i] != '1') {
              result2.push(i);
          }
    }
    
    finalResult[0] = result1;
    finalResult[1] = result2;
    
    return finalResult;
  }