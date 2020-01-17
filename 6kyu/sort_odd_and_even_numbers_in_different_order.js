function sortArray(array) {
    const odd = array.filter(e => {
    	return e % 2 != 0;
    });
    
    const sortOdd = odd.sort(function(a, b) {
    	return a - b;
	  });
    
    const even = array.filter(e => {
    	return e % 2 === 0;
    });
    
    const sortEven = even.sort(function(a, b) {
    	return b - a;
	  });

    const result = array.map(x => (x % 2) ? sortOdd.shift() : sortEven.shift()); 

    return result;
}