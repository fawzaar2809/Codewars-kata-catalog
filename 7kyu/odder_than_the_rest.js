function oddOne(arr) {
    var odd = arr.findIndex(e => {
            if (e % 2 !== 0)
            return e;
    });
    
    return odd;
    
}