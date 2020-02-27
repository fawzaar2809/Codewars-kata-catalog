Array.prototype.even = function() {
  // ...
  return this.filter(e => {
    return e % 2 === 0 && typeof e === "number" && Number.isInteger(e);
  });
};

Array.prototype.odd = function() {
  // ...
  return this.filter(e => {
    return e % 2 != 0 && typeof e === "number" && Number.isInteger(e);
  });
};

Array.prototype.under = function(x) {
  // ...
  return this.filter(e => {
    return e < x && typeof e === "number" && Number.isInteger(e);
  });
};

Array.prototype.over = function(x) {
  // ...
  return this.filter(e => {
    return e > x && typeof e === "number" && Number.isInteger(e);
  });
};

Array.prototype.inRange = function(min, max) {
  // ...
  return this.filter(e => {
    return e >= min && e <= max && typeof e === "number" && Number.isInteger(e);
  });
};
