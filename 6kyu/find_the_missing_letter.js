function findMissingLetter(array) {
	var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    var temp1 = lower.split('');
    var temp2 = upper.split('');
    
	if(temp1.includes(array[0])) {
    	alpha = temp1;
    } else {
    	alpha = temp2;
    }
   
   	var alphaIndex = 0;
    
	for (var i = 0; i < alpha.length; i++) {
    	if(alpha[i] === array [0])
        	alphaIndex = i;
    }
    
    var pos = 0;
    for (var i = alphaIndex ; i < alpha.length; i++) {
        if(alpha[i] !== array[pos]) {
          return alpha[i];
        }
        pos++;
    }
    return ' ';
}