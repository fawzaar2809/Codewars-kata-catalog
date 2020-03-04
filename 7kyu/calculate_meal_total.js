function calculate_total(subtotal, tax, tip) {
  // Your code here
  return Number(
    (subtotal + (tax / 100) * subtotal + (tip / 100) * subtotal).toFixed(2)
  );
}
