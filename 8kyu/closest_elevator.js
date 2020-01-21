function elevator(left, right, call) {
  var result =
    Math.abs(call - right) < Math.abs(call - left) ||
    Math.abs(call - right) === Math.abs(call - left)
      ? "right"
      : "left";

  //var result;

  //if((Math.abs(call - right) < Math.abs(call - left))) {
  //result= 'right';
  //} else if ((Math.abs(call - right) === Math.abs(call - left))) {
  //result = 'right';
  ///} else {
  //		result = 'left';
  //}

  //console.log(result);

  return result;
}
