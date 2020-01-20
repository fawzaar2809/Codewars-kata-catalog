function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    var result = marks.reduce((a, b) => a + b, 0);
    return Math.floor(result / marks.length);
  }