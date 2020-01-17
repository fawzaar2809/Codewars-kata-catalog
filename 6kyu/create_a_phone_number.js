function createPhoneNumber(numbers){
    var first = [];
     
    for (var i = 0; i <=2; i++) {
        first.push(numbers[i]);
    }
     
    first = first.toString().replace(/,/g,"");
     
    let initial = "(" + first + ")";
     
    var sec = [];
     
    for (var i = 3 ; i <=5; i++) {
        sec.push(numbers[i]);
    }
     
    sec = sec.toString().replace(/,/g,"");
     
     var third = [];
     
    for (var i = 6 ; i <= 9; i++) {
        third.push(numbers[i])
    }
     
    third = third.toString().replace(/,/g,"");
     
    return "(" + first + ")" + " " + sec + "-" + third; 
}