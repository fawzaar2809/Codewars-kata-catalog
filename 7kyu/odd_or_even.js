function oddOrEven(array) {
    //enter code here
   let total = array.reduce(function(sum, value) {
     return sum + value;
   }, 0);
   
   if (total%2 === 0) {
     return "even";
   } else {
     return "odd";
   }
 }