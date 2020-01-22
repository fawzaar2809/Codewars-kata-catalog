function enough(cap, on, wait) {
  var seatAvailable = cap - on;

  const result = seatAvailable < wait ? Math.abs(seatAvailable - wait) : 0;

  return result;

  //const test = on + wait - cap
  //return test > 0 ? test : 0;
}
