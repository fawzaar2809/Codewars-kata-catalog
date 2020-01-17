function toCamelCase(str){
	var temp = str.split('');
    
    const test = temp.map(function(e, i) {
    	if (e == '-' || e == '_') {
        	e = temp[i+1].toUpperCase();
          temp.splice(i+1, 1)
        }
        
        return e;
    });
    
    return test.join('');
}