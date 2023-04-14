/*
check wheather the object is frozen or not
*/

o = {a:1, b:2}
frozenOrNot = Object.isFrozen(o);

console.log(frozenOrNot)// false

Object.freeze(o)
frozenOrNot = Object.isFrozen(o);
console.log(frozenOrNot) // true