function squareDigits(num){
    //may the code be with you
    var temp = num.toString().split('');
      
      var res = temp.map(e => {
          return e * e;
      })
      
      return Number(res.join().replace(/,/g, ''));
  }