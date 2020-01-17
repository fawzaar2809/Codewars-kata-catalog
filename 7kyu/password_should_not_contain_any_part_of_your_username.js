function validate(username, password){
  //your code here
  if ( username.length>password.length ) return validate(password,username);
  
  let x = 0;
  
  for ( let i=0; i+x < username.length; i++ )
    for ( let j=i+1; j <= username.length; j++ )
      if ( password.includes(username.slice(i,j)) )
        x = Math.max(x,j-i);
        
  return x*2<username.length;
}