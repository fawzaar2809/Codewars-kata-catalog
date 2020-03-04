Array.prototype.sum = function() {
  return this.reduce((total, number) => total + number, 0);
};
