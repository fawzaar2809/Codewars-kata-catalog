function nextVersion(version){
    //TODO : find the next version
    let temp = version.split('.').map(Number);
  
    for(var i = temp.length -1; i >= 0; i--) {
        if(temp[i] + 1 === 10 && i !==0) {
          temp[i] = 0;
        } else {
          temp[i]++;
          break;
        }
    }
  
    return temp.join('.');
  }