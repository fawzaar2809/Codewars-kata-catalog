function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  var result = dna.replace(/T/g, "U");
  return result;
}
