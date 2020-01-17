function solution(str){
    var temp = str.split('');
 
    if(temp.length % 2 !== 0) {
        temp = temp.concat('_');
    }
 
    var result = [];
    
    for(var i = 0; i < temp.length; i+=2) {
        var currentValue = temp[i];
        var nextValue = temp[i+1];
        var arrayValue = currentValue + nextValue;

        result.push(arrayValue);
    }
    
    return result;  
}
