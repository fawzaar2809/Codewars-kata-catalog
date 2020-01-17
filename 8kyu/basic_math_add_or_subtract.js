function calculate(str) {
    //your code here...
      var temp = str.replace(/plus/gi, '+').replace(/minus/gi, '-');
      
      return eval(temp).toString();
    }