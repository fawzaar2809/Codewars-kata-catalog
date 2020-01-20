var moveZeros = function (arr) {
    // TODO: Program me
  
    var zerosArray = [];
    
    for (var i = 0; i < arr.length; i++){
            if(arr[i] === 0){
             zerosArray.push(0)
          }
    }
    
    var value = 0;
    
    var filteredArray = arr.filter(e => {
        return e !== value;	
    });
    
    var result = filteredArray.concat(zerosArray);
    
    return result;
}