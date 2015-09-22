var ts = require('../');
var assert = require('assert');

describe('Comparison functions', function() {

  describe('compare', function() {
    context('comparing numbers', function() {
      context('two integer values', function() {
        it('returns -1 if the 1st number is < the 2nd number', function() {
          assert.equal(ts.compare(-10, 10), -1);
        });
        it('returns  1 if the 1st number is > the 2nd number', function() {
          assert.equal(ts.compare(10, -10), 1);
        });
        it('returns  0 if the 1st number is === the 2nd number', function() {
          assert.equal(ts.compare(10, 10), 0);
        });
      });
      context('two floating point values', function() {
        it('returns -1 if the 1st number is < the 2nd number', function() {
          assert.equal(ts.compare(-1.0005, -1.00049), -1);
        });
        it('returns  1 if the 1st number is > the 2nd number', function() {
          assert.equal(ts.compare(1.1000049, 1.1000048), 1);
        });
        it('returns  0 if the 1st number is === the 2nd number', function() {
          assert.equal(ts.compare(1.0003, 1.0003), 0);
        });
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
          it('returns  0 if the 1st letter is === the 2nd letter', function() {
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
          it('returns  0 if the 1st word is === the 2nd word', function() {
            assert.equal(ts.compare('apple', 'apple'), 0);
          });
        });
      });
    });
    context('comparing booleans', function() {
      it('returns -1 when 1st value is < 2nd value', function() {
        assert.equal(ts.compare(false, true), -1);
      });
      it('returns  1 when 1st value is > 2nd value', function() {
        assert.equal(ts.compare(true, false), 1);
      });
      it('returns  0 when 1st value is === 2nd value', function() {
        assert.equal(ts.compare(false, false), 0);
      });
    });
    context('incompatible types', function() {
      it('throws an error if any one of parameters is undefined', function() {
        assert.throws( function() { ts.compare('4'); } );
        assert.throws( function() { ts.compare(); } );
        assert.throws( function() { ts.compare(undefined, 4); } );
      });
      it('throws an error if passed two different types of primitive values', function() {
        assert.throws( function() { ts.compare(true, null); } );
        assert.throws( function() { ts.compare(true, 4); } );
        assert.throws( function() { ts.compare(true, 'true'); } );
        assert.throws( function() { ts.compare(null, 4); } );
        assert.throws( function() { ts.compare(null, '4'); } );
        assert.throws( function() { ts.compare(4, '4'); } );
      });
      it('throws an error if passed an object', function() {
        assert.throws( function() { ts.compare({}, {}); } );
        assert.throws( function() { ts.compare([], []); } );
      });
      it('throws an error if passed a null value', function() {
        assert.throws( function() { ts.compare(null, null); } );
      });
      it('throws an error if passed a function', function() {
        var fn1 = function() {};
        var fn2 = function() {};
        assert.throws( function() { ts.compare(fn1, fn2); });
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

  describe('sorted', function() {
    it('returns true if the array is sorted ascendingly', function() {
      var arr = ['a', 'b', 'c'];
      assert(ts.sorted(arr));
    });
    it('returns false if the array is not sorted ascendingly', function() {
      var arr = ['c', 'b', 'a'];
      assert.equal(ts.sorted(arr), false);
    });
    context('overriding the default sort criteria', function() {
      it('can verify the array is sorted descendingly', function() {
        var arr = ['c', 'b', 'a'];
        assert(ts.sorted(arr, { descending: true }));
      });
    });
    context('duplicate array items', function() {
      it('ignores duplicate adjacent items', function() {
        var arr = [1,2,3,4,4];
        assert(ts.sorted(arr));
      });
      it('ignores duplicate adjacent items in descending order', function() {
        var arr = [4,3,3,2,1];
        assert(ts.sorted(arr, {descending: true}));
      });
    });
  });

});
