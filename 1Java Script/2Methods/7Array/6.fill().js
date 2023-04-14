/**
 * The fill() method changes all elements in an array to a static value, 
 * from a start index (default 0) to an end index (default array.length). 
 * It returns the modified array.
 * 
 * The fill() method is generic. It only expects the this value to have a length property.
 * 
 * 
 * The fill() method is a mutating method. 
 * It does not alter the length of this, but it will change the content of this.
 * 
 * modifies the original array
 * return the modified array, filled with value.
 */



// with one value
console.log('with one value')

a = [1,2,3,4,5,,,8]
reference = a.fill('*')
reference[0] = 10;
console.log(reference,a) // [10,  '*', '*','*', '*', '*','*', '*'] [10,  '*', '*','*', '*', '*','*', '*']



console.log()
// with two value
console.log('with two value')

a = [1,2,3,4,5,,,8]
console.log(a.fill(1, 4))  // [1, 2, 3, 4, 1, 1, 1, 1]



console.log()
// with Three value
console.log('with Three value')

a = [1,2,3,4,5,,,8]
a.fill(undefined, 3, 6)
console.log(a)  // [ 1, 2, 3, undefined, undefined, undefined, <1 empty item>, 8 ]



console.log()
// populating empty array
console.log('populating empty array')

a = new Array(8)
a.fill({})
console.log(a) // [{}, {}, {}, {}, {}, {}, {}, {}]



console.log()
// using array like 
console.log('using array like')

a = {
    1:2,
    2:3,
    3:4,
    4:5,
    5:6,
    6:7,
    length: 7
}
console.log(Array.prototype.fill.call(a,'vijay', 3, 6)) 
/* {
    '1': 2,
    '2': 3,
    '3': 'vijay',
    '4': 'vijay',
    '5': 'vijay',
    '6': 7,
    length: 7
  }*/
