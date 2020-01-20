function pigIt(str){
var newArray = str.split(' ');
   
   var result = [];
   
   for (var i = 0; i < newArray.length; i++) {
           if(newArray[i] != '!' && newArray[i] != '?' ) {
             var firstChar = newArray[i].charAt(0);
             console.log('firstChar', firstChar);
 
             var filteredWord = newArray[i].substring(1);
             console.log('filteredWord', filteredWord);
             
             let final = filteredWord + firstChar + 'ay';          
             result.push(final);
             
         } else {
             result.push(newArray[i]);
         }
   }
   
   console.log('result', result.join(' '));
   
   return result.join(' ');
 }