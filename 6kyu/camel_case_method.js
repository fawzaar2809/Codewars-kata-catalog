String.prototype.camelCase=function(){
    //your code here
    return this.split(' ').map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }).join('');
  }