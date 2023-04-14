/**
 * The copyWithin() method shallow copies part of an array to another location in the same array
 *  and returns it without modifying its length.

The copyWithin() method is a mutating method. It does not alter the "length" of this, 
but it will change the content of "this" and create new properties or delete existing properties, if necessary.

 * modifies the original array
 * return the modified array, filled with value.
*/

d = [1,2,[3,4],5,6,,,]
console.log(d) // [ 1, 2, [ 3, 4 ], 5, 6, <2 empty items> ]

// copyWithin(target)
console.log('copyWithin(target)')

const c = [1,2,[3,4],5,6,,,]
c.copyWithin(3);
console.log(c) // [ 1, 2, [ 3, 4 ], 1, 2, [ 3, 4 ], 5 ]



console.log()
// copyWithin(target, start)
console.log('copyWithin(target, start)')

const b = [1,2,[3,4],5,6,,,]
console.log('before copyWithin')
console.log(b)  // [ 1, 2, [ 3, 4 ], 5, 6, <2 empty items> ]
reference = b.copyWithin(0,1);
reference[0] = 10000000
console.log(reference,b) // [ 10000000, [ 3, 4 ], 5, 6, <3 empty items> ] [ 10000000, [ 3, 4 ], 5, 6, <3 empty items> ]



console.log()
// copyWithin(target, start, end)
console.log('copyWithin(target, start, end)')

const a = [1,2,[3,4],5,6,,,]
a.copyWithin(0,1,3);
console.log(a) // [ 2, [ 3, 4 ], [ 3, 4 ], 5, 6, <2 empty items> ]



console.log()
// Example 1 starting before starting index - states from 0
console.log('starting before starting index')

f = [1,2,3,4,5]
f.copyWithin(-4,-17,-3)
console.log(f) // [ 1, 1, 2, 4, 5 ]



console.log()
// Example 2 ending after ending index - ends at the arr.length
console.log('ending after ending index')

h = [1,2,3,4,5]
h.copyWithin(0, 2, 10)
console.log(h) // [ 3, 4, 5, 4, 5 ]



console.log()
// Example 3 start > end - no change
console.log()

g = [1,2,3,4,5]
g.copyWithin(0, 3, 2); 
console.log(g) // [ 1, 2, 3, 4, 5 ]


console.log()
// Example 4 arrayLike object
console.log()

const arrayLike = {
    length : 6,
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6
}
console.log(Array.prototype.copyWithin.call(arrayLike,2,0,2));
// { '0': 1, '1': 2, '2': 1, '3': 2, '4': 5, '5': 6, length: 6 }


// without passing parameter - same array will return
i = [1,2,3,4,5]
console.log(i.copyWithin()) // [ 1, 2, 3, 4, 5 ]