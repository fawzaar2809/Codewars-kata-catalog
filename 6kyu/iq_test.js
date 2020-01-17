function iqTest(numbers){
    var temp = numbers.split(' ').map(e => Number(e));
  
    var even = temp.filter(e => {
        return e % 2 === 0;
    });
    
    var odd = temp.filter(e => {
        return e % 2 !== 0;
    });
    
    var result = odd.length < even.length ? (temp.indexOf(odd[0]) + 1) : (temp.indexOf(even[0]) + 1);
    return result;
}