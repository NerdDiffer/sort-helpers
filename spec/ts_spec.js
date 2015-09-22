var ts = require('../');
var assert = require('assert');

describe('Sorting helper functions', function() {

  describe('compare', function() {
    context('comparing integers', function() {
      it('returns -1 if the 1st number is < the 2nd number', function() {
        assert.equal(ts.compare(-10, 10), -1);
      });
      it('returns  1 if the 1st number is > the 2nd number', function() {
        assert.equal(ts.compare(10, -10), 1);
      });
      it('returns  0 if the 1st number is == the 2nd number', function() {
        assert.equal(ts.compare(10, 10), 0);
      });
    });
    context('comparing floating point numbers', function() {
      it('returns -1 if the 1st number is < the 2nd number', function() {
        assert.equal(ts.compare(-1.0005, -1.00049), -1);
      });
      it('returns  1 if the 1st number is > the 2nd number', function() {
        assert.equal(ts.compare(1.1000049, 1.1000048), 1);
      });
      it('returns  0 if the 1st number is == the 2nd number', function() {
        assert.equal(ts.compare(1.0003, 1.0003), 0);
      });
    });
    context('comparing strings', function() {
      context('single-character strings', function() {
        context('both letters same case', function() {
          it('returns -1 if the 1st letter is < the 2nd letter', function() {
            assert.equal(ts.compare('a', 'b'), -1);
          });
          it('returns  1 if the 1st letter is > the 2nd letter', function() {
            assert.equal(ts.compare('z', 'y'), 1);
          });
          it('returns  0 if the 1st letter is == the 2nd letter', function() {
            assert.equal(ts.compare('m', 'm'), 0);
          });
        });
        context('one letter upper-case, other letter lower-case', function() {
          it('considers upper-case letters < lower-case letters', function() {
            assert.equal(ts.compare('a', 'B'), 1);
            assert.equal(ts.compare('Z', 'y'), -1);
            assert.equal(ts.compare('M', 'm'), -1);
          });
        });
      });
      context('multiple-character strings', function() {
        context('all letters same case', function() {
          it('returns -1 if the 1st word is < the 2nd word', function() {
            assert.equal(ts.compare('aardvark', 'apple'), -1);
          });
          it('returns  1 if the 1st word is > the 2nd word', function() {
            assert.equal(ts.compare('apple', 'aardvark'), 1);
          });
          it('returns  0 if the 1st word is == the 2nd word', function() {
            assert.equal(ts.compare('apple', 'apple'), 0);
          });
        });
      });
    });
  });

  describe('less', function() {
    it('returns true  if the 1st value is < the 2nd value', function() {
      assert(ts.less(-10, 10));
    });
    it('returns false if the 1st value is > the 2nd value', function() {
      assert.equal(ts.less(10, -10), false);
    });
    it('returns false if the 1st value is == the 2nd value', function() {
      assert.equal(ts.less(10, 10), false);
    });
  });

  describe('more', function() {
    it('returns true  if the 1st value is > the 2nd value', function() {
      assert(ts.more(10, -10));
    });
    it('returns false if the 1st value is < the 2nd value', function() {
      assert.equal(ts.more(-10, 10), false);
    });
    it('returns false if the 1st value is == the 2nd value', function() {
      assert.equal(ts.more(10, 10), false);
    });
  });

  describe('exch', function() {
    it('mutates contents of the original array', function() {
      var arr = ['a', 'b', 'c'];
      ts.exch(arr, 0, 2);
      ts.exch(arr, 1, 2);
      assert.notDeepEqual(arr, ['a', 'b', 'c']);
    });
    it('swaps positions of two array elements', function() {
      var arr = ['a', 'b', 'c'];
      ts.exch(arr, 0, 1);
      assert.equal(arr[0], 'b');
      assert.equal(arr[1], 'a');
      assert.equal(arr[2], 'c');
    });
  });

  describe('sorted', function() {
    it('returns true if the array is sorted', function() {
      var arr = ['a', 'b', 'c'];
      assert(ts.sorted(arr));
    });
    it('returns false if the array is not sorted', function() {
      var arr = ['c', 'b', 'a'];
      assert.equal(ts.sorted(arr), false);
    });
    context('overriding the default sort criteria', function() {
      it('allows you to redefine the sorting criteria at runtime', function() {
        var arr = ['c', 'b', 'a'];
        assert(ts.sorted(arr, { descending: true }));
      });
    });
  });

});
