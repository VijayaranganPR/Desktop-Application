/*
Assignment Operators
+=
-=
*=
/=
%=
**=

&&
||

&
|
^
<<
>>
<<<

??
*/

let a = 15;
b = 3;
console.log(`a value is ${a} b value is ${b}`)
a += b;
console.log(`after a += b value of a is ${a}`)
a -= b;
console.log(`after a -= b value of a is ${a}`)
a *= b;
console.log(`after a *= b value of a is ${a}`)
a /= b;
console.log(`after a /= b value of a is ${a}`)
a **= b;
console.log(`after a **= b value of a is ${a}`)
console.log("")

a = false;
b = true;
console.log(`a value is ${a} b value is ${b}`)
a &&= b;
console.log(`after a &&= b value of a is ${a}`)
a ||= b;
console.log(`after a ||= b value of a is ${a}`)
console.log("")

a = 5;
b = 1;
console.log(`a value is ${a} b value is ${b}`)
a &= b;
console.log(`after a &= b value of a is ${a}`)
a |= b;
console.log(`after a |= b value of a is ${a}`)
a ^= b;

a = 5;
b = 1;
console.log(`a value is ${a} b value is ${b}`)
console.log(`after a ^= b value of a is ${a}`)
a <<= b;
console.log(`after a <<= b value of a is ${a}`)
a >>= b;
console.log(`after a >>= b value of a is ${a}`)
a >>>= b;
console.log(`after a <<<= b value of a is ${a}`)

a = null;
b = "\"not null value string\"";
console.log(`a value is ${a} b value is ${b}`)
a ??= b;
console.log(`after a ??= b value of a is ${a}`)
