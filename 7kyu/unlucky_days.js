function unluckyDays(year){
    //your code here
    var count = 0;
  
    for(var i = 0; i < 12; i++) {
      count += new Date(year, i, 13).getDay() === 5 ? 1: 0;
    }
    
    return count;
}