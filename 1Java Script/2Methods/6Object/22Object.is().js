/**
 * to check wheather both values are equal or not
 */
console.log(Object.is(2,2))  // true
console.log(Object.is(2,"2")) //  false
console.log(Object.is(null,null)) // true
console.log(Object.is(undefined,null)) //  false
console.log(Object.is(NaN,undefined)) //  false
console.log(Object.is(0,null)) //  false
console.log(Object.is(0,'')) //  false
