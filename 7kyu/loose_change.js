// Remember you have a CHANGE dictionary to work with ;)

function changeCount(change) {
  var penny = 0.01;
  var nickel = 0.05;
  var dime = 0.1;
  var quarter = 0.25;
  var dollar = 1.0;

  var changeListArray = change.split(/[ ,]+/);

  var totalAmount = changeListArray.reduce(
    (sum, value) => (sum += eval(value)),
    0
  );

  return "$" + totalAmount.toFixed(2);
}
