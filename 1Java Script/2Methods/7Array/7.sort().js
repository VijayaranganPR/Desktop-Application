/**
 * The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
 * The default sort order is ascending, built upon converting the elements into strings, 
 * then comparing their sequences of UTF-16 code units values.
 * 
 * Returns The reference to the original array, now sorted. 
 * Note that the array is sorted in place, and no copy is made.
 * 
 * 
 * if function is not applied it converts, the value to a string and sort in alphabatical order
 * 
 * if function is applied: (numbers are not standard - just negative or positive)
 * return (-)negative for 'a' before 'b'
 * return (+)positive for 'a' after 'b'
 * return 0 to keep same
 * 
 * the empty slots are moved to the end of the array, and always come after all the undefined.
 * 
 * The sort() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties.
 * 
 * The sort() method returns a reference to the original array, 
 * so mutating the returned array will mutate the original array as well.
 */

// Simple Example
console.log('Simple Example')

a = [1,99,123,3,33,5]
sorted = a.sort()
console.log(a,sorted) // [ 1, 123, 3, 33, 5, 99 ] [ 1, 123, 3, 33, 5, 99 ]



console.log()
// compare number
console.log('compare number')

a = [1,99,123,3,33,5]
sorted = a.sort((a,b)=> a-b)
console.log(a,sorted) // [ 1, 3, 5, 33, 99, 123 ] [ 1, 3, 5, 33, 99, 123 ]



console.log()
// on sparse arrays - sorted based on alphabatical order
console.log('on sparse arrays')

a = [[],1,5,2,5,2,7,NaN,null, undefined, true, 'string', 1n, {}, ,,,]
console.log(a.sort())
/**
[
  [],
  1,
  1n,
  2,
  2,
  5,
  5,
  7,
  NaN,
  {},
  null,
  'string',
  true,
  undefined,
  <3 empty items>
]
 */

console.log()
// mutating the returned array will mutate the original array as well.
console.log('mutating the returned array will mutate the original array as well.')

a = [1,99,123,3,33,5]
sorted = a.sort((a,b)=> a-b)
sorted[0] = 1000000;
console.log(a,sorted) // [ 1000000, 3, 5, 33, 99, 123 ] [ 1000000, 3, 5, 33, 99, 123 ]



console.log()
// to not affect the original array
console.log('to not affect the original array')

a = [1,99,123,3,33,5]
sorted = [...a].sort((a,b)=> a-b)
sorted[0] = 1000000;
console.log(a,sorted) // [ 1, 99, 123, 3, 33, 5 ] [ 1000000, 3, 5, 33, 99, 123 ]



console.log()
// sorting objects by names 
console.log('sorting objects by names ')

const students = [
    { name: "Alex", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Devlin", grade: 15 },
    { name: "Eaglee", grade: 14 },
];
console.log(students.sort((a,b)=> {
    temp1 = a.name.toUpperCase()
    temp2 = b.name.toUpperCase()
    if (temp1<temp2){
        return -1
    }
    else if (temp1>temp2){
        return 1
    }
    else{
        return 0
    }
}
))
/**
sorting objects by names
[
  { name: 'Alex', grade: 15 },
  { name: 'Devlin', grade: 15 },
  { name: 'Eagle', grade: 13 },
  { name: 'Eaglee', grade: 14 }
]
*/



console.log()
// sorting objects by grades 
console.log('sorting objects by grades ')

console.log(students.sort((a,b)=> a.grade-b.grade))

/**
sorting objects by grades
[
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
  { name: 'Alex', grade: 15 },
  { name: 'Devlin', grade: 15 }
]
 */

console.log()
// Sort stability increased after ECMA 2019
// which means 'Alex'  and 'Devlin' have the same grades
// before ECMA 2019 it will interchange each time when we sort not it will not happen now

console.log('Sort stability')



console.log()
// on non-array objects
console.log('on non-array objects')

const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 34,
    2: 4,
  };
  console.log(Array.prototype.sort.call(arrayLike));
  // { '0': 34, '1': 4, length: 3, unrelated: 'foo' }