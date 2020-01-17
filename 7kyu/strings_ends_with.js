function solution(str, ending){
    let endLen = ending.length;
    
    let strLast = str.slice(-endLen);
  
    if(!ending) {
        ending = str;
      console.log('1', ending);
    }
    
    if(strLast == ending) {
            return true;
    } else {
            return false;
    }
}