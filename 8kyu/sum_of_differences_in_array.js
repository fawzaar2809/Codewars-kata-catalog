function sumOfDifferences(arr) {
    const temp =  arr.sort((a, b) => b - a);
  
    let sum = 0;
  
    for (var i = 1; i < temp.length; i++) {
      sum += temp[i-1] - temp[i];
    }
    
    return sum;
}