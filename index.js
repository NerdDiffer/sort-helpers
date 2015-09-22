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
  var vType = typeof v;
  var wType = typeof w;

  if (vType == 'object' || vType == 'function' || wType == 'object' || wType == 'function') {
    throw new Error('you cannot compare objects, functions, or null values');
  } else if (vType == 'undefined' || wType == 'undefined') {
    throw new Error('you must pass in two things to compare');
  } else if (vType != wType) {
    throw new Error('the 2 parameters must be of the same type');
  }

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
 * Is the array sorted or not?
 * @param arr, [Array] the array you want to test!
 * @param opts, [Object] options.
 *   by default, it will check for ascending order.
 * @return [Boolean]
 */
var sorted = function(arr, opts) {
  // if ascending order, then `fn` is `less`
  // if descending order, then `fn` is `more`
  var fn = (opts && opts.descending === true ? more : less);

  return arr.every(function(v, i, a) {
    // special case for 1st iteration:
    // since we're looking back one index, automatically return `true`
    if (i === 0) {
      return true;
    } else {
      // special case for equal values:
      // if previous-value is === current-value, automatically return `true`
      return ( compare(a[i - 1], v) === 0 ? true : fn(a[i - 1], v) );
    }
  });
};

module.exports = {
  compare: compare,
  less: less,
  more: more,
  sorted: sorted
};
