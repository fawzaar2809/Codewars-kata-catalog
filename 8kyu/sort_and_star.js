function twoSort(s) {
    let temp = s.sort();
    
    let first = temp[0];
    
    let result = [...first].join('***');
    
    return result;
    
}