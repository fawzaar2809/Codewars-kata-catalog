function arrayPlusArray(arr1, arr2) {
    var sum1 = arr1.reduce((a,b)=> a + b, 0);
    
    var sum2 = arr2.reduce((a,b)=> a + b, 0);
    
    return sum1 + sum2;
  }