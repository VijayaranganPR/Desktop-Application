/*
returns the value at the specified index
we can't use negative numbers in []
Syntax
.at(index)

returns undefined if out of bounds
*/

a = [1,2,3,4]
ele = a.at(3);
console.log(a,ele) // [ 1, 2, 3, 4 ] 4

ele1 = a.at(5)
ele2 = a.at(-5)
console.log(ele1,ele2); // undefined undefined


console.log()
/**
 * you cannot use array[-1] like you may in Python or R, 
 * because all values inside the square brackets are treated literally as string properties, 
 * so you will end up reading array["-1"], 
 * which is just a normal string property instead of an array index.
 */

ind = -1
// instard of this
ele3 = a[ind];
console.log(ele3) // undefined 

// use this
ele4 = a[a.length + ind]
console.log(ele4) 



console.log()
/*
Generic array methods
Array methods are always generic — they don't access any internal data of the array object. 
They only access the array elements through the length property and the indexed elements. 
This means that they can be called on array-like objects as well.*/
const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"


console.log()
// without passing parameter it will consider 0 at index
console.log(a.at()) // 1