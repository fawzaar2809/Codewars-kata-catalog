function getDivisorsCnt(n){
    // todo
    let count = 0;
    
    for(let i = 1; i <= n; i++){
        if(!(n % i)) 
          count++;
    }
    
    return count;
}