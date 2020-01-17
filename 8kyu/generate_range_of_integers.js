function generateRange(min, max, step){

    var arr = [];
    
    for (var i = min; i <= max; i+=step) {
        arr.push(i);
    }
    
    return arr;
  
  }