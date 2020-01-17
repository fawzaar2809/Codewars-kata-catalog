function firstDup (s) {
    for(var i = 0; i < s.length; i++) {
  
        var count = 0;
  
        for (var j = 0; j < s.length; j++) {
  
          if (s[i] === s[j]) {
            count++;
          }
  
          if(count >= 2) {
            return s[i];
          }
        }
    }
  }