# Total Sorta

This is a small set of helper functions, designed to compare or swap array
elements. Usually, you'd use them in a sorting algorithm.

This isn't anything original, I got the idea of wrapping total order into
functions from Sedgewick & Wayne's book on
[Algorithms](http://algs4.cs.princeton.edu/21elementary/).

They're reliable, and hopefully the JS community will find them useful too.

### Installation


### Usage

`var ts = require('total-sorta');`

## API

#### `compare(v, w)`

Compares two items & returns a result. It's assumed that they have some common
characteristic.

Like the `<=>` (spaceship) operator in Ruby, Perl, PHP or Groovy, it returns:

* `-1` if the 1st item is `<` the 2nd item
* `1` if the 1st item is `>` the 2nd item
* `0` otherwise

#### `less(v, w)`

* Returns true if & only if item `v` is **less than** `w`
* Returns false if the item `v` is greater than `w`
* Returns false if the two items are equal

#### `more(v, w)`

* Returns true if & only if item `v` is **greater than** `w`
* Returns false if the item `v` is less than `w`
* Returns false if the two items are equal

#### `exch(arr, i, j)`

Swaps two elements in your array, `arr`, at two indices: `i` and `j`. This
function will mutate your original array.

#### `sorted(arr, [option])`

Returns true if your array, `arr`, is sorted.
By default, it will check for ascending order. If you want descending order,
pass in the option, `{ descending: true }`, as 2nd parameter.
