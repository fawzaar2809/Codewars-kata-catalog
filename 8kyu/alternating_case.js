String.prototype.toAlternatingCase = function(s) {
  // Define your method here :)
  return this.replace(/[a-z]/gi, char =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
};
