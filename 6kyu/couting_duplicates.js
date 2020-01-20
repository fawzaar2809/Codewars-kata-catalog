function duplicateCount(text){
    var newArray = text.toLowerCase().split("").sort();
    
    var filteredArray = newArray.filter(function(a, b) {
            return newArray.indexOf(a) !== b; 
    });
    
    var result = filteredArray.filter(function(item, pos) {
      return filteredArray.indexOf(item) == pos;
    });
    
    return result.length;
}