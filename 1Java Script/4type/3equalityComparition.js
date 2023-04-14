// NaN - anything with nan will be false
console.log('NaN')
console.log(NaN == NaN)     // false
console.log(NaN === NaN)    // false


console.log()
// undefined can be only equal to null(in == only) or undefined 
console.log(`undefined`);
console.log(undefined == undefined)  // true
console.log(undefined === undefined) // true


console.log(``);
// undefined - false
console.log(`undefined - false`);
console.log(undefined == false);    // false
console.log(undefined === false)    // false


console.log()
// null can be only equal to null or undefined(in == only)
console.log('null')
console.log(null == null) // true
console.log(null === null) // true


console.log(``);
// null - false
console.log(`null - false`);
console.log(null == false);    // false
console.log(null === false)    // false


console.log()
// undefined - null
console.log('undefined - null')
console.log(undefined == null)     // true
console.log(undefined === null)    // false


console.log()
// {} - {}
console.log('{} - {}')
console.log({} == {})     // false
console.log({} === {})    // false


console.log()
// [] - []
console.log('[] - []')
console.log([] == [])     // false
console.log([] === [])    // false


console.log(``);
// string - new string
console.log(`string - new string`);
console.log('vijay' == new String('vijay'))     // true
console.log('vijay' === new String('vijay'))    // false


console.log(``);
// new string - new string
console.log(`string - new string`);
console.log(new String('vijay') == new String('vijay'))     // false
console.log(new String('vijay') === new String('vijay'))    // false


console.log()
// 0 - ''
console.log('0 - ""')
console.log(0 == '')    // true
console.log(0 === '')   // false


console.log()
// 0 - []
console.log('0 - []')
console.log(0 == [])    // true
console.log(0 === [])   // false


console.log()
// [] - ''
console.log('[] - ""')
console.log([] == '')    // true
console.log([] === '')   // false


