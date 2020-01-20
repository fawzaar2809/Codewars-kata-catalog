function findOutlier(integers){
	var resultOne = [];
 	var resultTwo = [];
    var countEve = 0;
    var countOdd = 0;
    
    for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            countEve ++;
            resultOne.push(integers[i]);
        }
        if (integers[i] % 2 !== 0){
            countOdd ++;
            resultTwo.push(integers[i]);
        }
    }

    var finalArray;
            
    if(resultOne.length < resultTwo.length) {
        finalArray = resultOne;
    } else {
        finalArray = resultTwo;
    } 
        
    var final;
    
    var result = finalArray.map(e => {
        final = +e;
    });
        
    return final;
}