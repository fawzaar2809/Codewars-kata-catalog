/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */

/* String.prototype.capitalize = function() {
  return this.replace(/^\D/, firstLetter =>
    String.fromCharCode(firstLetter.charCodeAt(0) - 32)
  );
}; */

String.prototype.capitalize = function() {
  let dict = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z"
  };
  return (
    this.toString()[0].replace(/[a-z]/, v => dict[v]) + this.toString().slice(1)
  );
};
