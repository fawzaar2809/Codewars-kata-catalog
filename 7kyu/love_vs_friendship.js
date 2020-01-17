function wordsToMarks(string){
    //your code here
    var sum = 0;
  
    for (var i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i) -96;
    }
  
    return sum;
}