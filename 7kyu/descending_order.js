function descendingOrder(n){
    const temp = n.toString().split('');
  
    const temp2 = temp.sort(function(a, b) {
        return (b - a);
    })
  
    const temp3 = temp2.toString().replace(/,/g, "");
  
    return parseInt(temp3);
  }