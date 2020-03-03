/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */

String.prototype.capitalize = function() {
  return this.replace(/^\D/, firstLetter =>
    String.fromCharCode(firstLetter.charCodeAt(0) - 32)
  );
};
