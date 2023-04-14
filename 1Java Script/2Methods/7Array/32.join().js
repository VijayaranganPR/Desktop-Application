/*
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator.

When used on sparse arrays, the join() method iterates empty slots as if they have the value undefined.

The join() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

// simple example
console.log('simple example')

a = ["Wind", "Water", "Fire"];
console.log(a.join()); // 'Wind,Water,Fire'
console.log(a.join(", ")); // 'Wind, Water, Fire'
console.log(a.join(" + ")); // 'Wind + Water + Fire'
console.log(a.join("")); // 'WindWaterFire'



console.log()
// on sparse arrays
console.log('on sparse arrays')

console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'



console.log()
// on non-array objects
console.log('on non-array objects')

arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  }
console.log(Array.prototype.join.call(arrayLike,'+'))
/*
on non-array objects
2+3+4
*/