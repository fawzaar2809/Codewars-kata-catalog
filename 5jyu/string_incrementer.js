function incrementString (strng) {
    // return incrementedString
    var temp = strng.split('');
    
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    var filterString = temp.filter(e=> {
        return !num.includes(e);
    })
    
    var filterNum = temp.filter(e=> {
        return num.includes(e);
    });
    
    var resultString = filterString.join('');
    
    var resultNum = filterNum.join('') || 0;
    
    resultNum = (parseInt(resultNum) + 1).toString();
    
    var diffLength = strng.length - filterString.length;
    
    while (resultNum.length < diffLength) {
        resultNum = "0" + resultNum;
    }
    
    return resultString.concat(resultNum);
}