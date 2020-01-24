function fakeBin(x) {
  //      var result = dna.replace(/T/g, 'U');
  //    return result;

  var result = x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
  return result;
}
