/**
 * The push() method adds one or more elements to the end of an array 
 * and returns the new length of the array.
 * 
 * 
 * The push() method is a mutating method. It changes the length and the content of this. 
 * In case you want the value of this to be the same, 
 * but return a new array with elements appended to the end, 
 * you can use arr.concat([element0, element1, ... elementN]) instead. 
 * 
 * 
 * The push() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties. 
 */

// simple example
console.log('simple example')
a = [1,2,3,4,5]
len = a.push(6)
console.log(a,len) // [ 1, 2, 3, 4, 5, 6 ] 6



// adding sparse element - no element added
console.log('adding sparse element')
a = [1,2,3,4,5]
len = a.push(...[,])
console.log(a,len) 
/*
adding sparse element
[ 1, 2, 3, 4, 5, undefined ] 6
*/


console.log()
// adding more elements
console.log('adding more elements')
a = [1,2,3,4,5]
len = a.push(6,7,8,9)
console.log(a,len) // [1, 2, 3, 4, 5, 6, 7, 8, 9] 9



console.log()
// merging two arrays
console.log('merging two arrays')
a = [1,2,3,4,5]
b = [6,7,8,9,10]
len = a.push(...b)
console.log(a,len) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 10



console.log()
// on non-array objects 
// if we didn't specify length or length is negative means it will be considered as 0 
// present elements will be overridden
console.log('on non-array objects')
a = {
    length : -8,
    1: 1,
    2: 2,
    3: 3,
}
len = Array.prototype.push.call(a,4,5,6,7,8)
console.log(a,len) // { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8, length: 5 } 5



console.log()
// Using an object in an array-like fashion
console.log('Using an object in an array-like fashion')
const obj = {
    length: 0,
  
    push(elem) {
      // obj.length is automatically incremented
      // every time an element is added.
      [].push.call(this, elem);
    },
};
  
obj.push({});
obj.push(undefined);
obj.push(1);
obj.push(true);
obj.push('string value')
console.log(obj,obj.length); 
/**
{
  '0': {},
  '1': undefined,
  '2': 1,
  '3': true,
  '4': 'string value',
  length: 5,
  push: [Function: push]
} 5
 */
