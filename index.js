/**
 * Generic comparison function.
 * Works like the `<=>` operator in other languages.
 * @param v, 1st value
 * @param w, 2nd value
 * @return, -1 if v < w
 *           1 if v > w
 *           0 if v == w
 */
var compare = function(v, w) {
  if (v < w)      { return -1; }
  else if (v > w) { return  1; }
  else            { return  0; }
};

/**
 * Is item `v` less than item `w`?
 * @return [Boolean]
 */
var less = function(v, w) {
  return compare(v, w) < 0;
};

/**
 * Is item `v` greater than item `w`?
 * @return [Boolean]
 */
var more = function(v, w) {
  return compare(v, w) > 0;
};

/**
 * Swaps two items of an array. Mutates contents of original array.
 * @param arr, the array
 * @param i, the index of one item in @param `arr`
 * @param j, the index of another item in @param `arr`
 */
var exch = function(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

/**
 * Is the array sorted or not?
 * @param arr, [Array] the array you want to test!
 * @param fn, optional, the criteria to compare one array value to previous
 *   by default: will be the `compare` function in this module
 * @return [Boolean]
 */
var sorted = function(arr, opts) {
  var fn = (opts && opts.descending === true ? more : less);

  return arr.every(function(v, i, a) {
    return ( i === 0 ? true : fn(a[i - 1], v) );
  });
};

module.exports = {
  compare: compare,
  less: less,
  more: more,
  exch: exch,
  sorted: sorted
};
