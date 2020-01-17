function shortcut(string){
    const a = ['a','e','i','o','u'];
  
    const temp = string.split('');
  
    var res = temp.filter(e=> {
          return !a.includes(e);
    })
  
    return res.join('');
  