function alphabetPosition(text) {
var alpha = 'abcdefghijklmnopqrstuvwxyz'.replace(/[^a-zA-Z ]/g, "").split('');
    
  var temp = text.replace(/\s/g, "").replace(/[^a-zA-Z ]/g, "").toLowerCase().split('');
  
  var pos = temp.map(e => {
  	return alpha.indexOf(e) + 1; 
  });
    
  return pos.toString().replace(/,/g, ' ');
}