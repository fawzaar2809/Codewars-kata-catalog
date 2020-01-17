function well(x){
    var count = 0;
  
    for (var i = 0; i < x.length; i++) {
          console.log(x[i]);
          if(x[i] === 'good') {
              count++;
              console.log(count)
          }
    }
  
    if(count === 0) {
      return 'Fail!'
    } else if( count <= 2) {
      return 'Publish!'
    } else if(count >= 2) {
      return 'I smell a series!'
    }
}

/* function well(x){
	var count = 0;
    
	for (var i = 0; i < x.length; i++) {
    	if(x[i] === 'good')
        	count++;
    }

    
    if(count > 0 && count <= 2) {
    	return 'Publish!';
    } else if (count >= 2) {
    	return 'I smell a series!';
    } else if (count === 0) {
    	 return 'Fail!';
    }
} */