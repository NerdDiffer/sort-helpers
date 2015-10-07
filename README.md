# Total Sorta

This is a small set of helper functions, designed to compare array elements.
Usually, you'd use them in implementing a sorting algorithm.

I got the idea of wrapping [total order](https://en.wikipedia.org/wiki/Total_order)
into functions from Sedgewick & Wayne's book on [Algorithms](http://algs4.cs.princeton.edu/21elementary/).

They're reliable, and hopefully the JS community will find them useful too.

### Installation

`$ npm install total-sorta`

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

* Returns true *if & only if* item `v` is **less than** `w`
* Returns false if the item `v` is greater than `w`
* Returns false if the two items are equal

#### `more(v, w)`

* Returns true *if & only if* item `v` is **greater than** `w`
* Returns false if the item `v` is less than `w`
* Returns false if the two items are equal

#### `sorted(arr, [option])`

Returns true if your array, `arr`, is sorted.
By default, it will check for ascending order. If you want descending order,
pass in the option, `{ descending: true }`, as 2nd parameter.

### For what it's worth, `!condition`

This may seem obvious, but it wasn't to me at first. Flip the boolean result
with `!` to check for 'less than or equal to' or 'greater than or equal to'.

* `!more(v, w)` is true if `v <= w`
* `!less(v, w)` is true if `v >= w`
