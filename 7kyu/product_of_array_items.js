/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
function product(values) {
    const res = Array.isArray(values) && values.length ? values.reduce((a , b) => a * b, 1) : null;
    return res;
}