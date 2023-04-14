/*
used to define more than one property for a object
enumerable - wheather the property is counted or not
writable - can be overwritten or not
configurable - controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable ) can be changed.30-Oct-2022
*/

const o = {a: 1}
Object.defineProperties(o,{
    b :{
        value : 2,
        enumerable: true,
        writable : true,
        configurable: true
    },
    c:{
        value : 3,
        enumerable: false, // can't be seen in console
        writable: false,
        configurable : false
    },
    d:{
        value : 4,
        enumerable : true,
        configurable: false,
        writable: true
    }
})

console.log()
// enumerable check
console.log(o)

console.log()
// writable check
o.b = 10;
o.c = 20; // value will not change
console.log(o.b, o.c)  // 10 3

console.log()
// configurable check
o.b = [1,2,3]
o.c = [1,2,3]
console.log(o.b, o.c) // can't change its type
o.c = 10;
console.log(o.b, o.c) // still no change

// non configurable d
o.d = 20;
console.log(o.b,o.d)  // [1,2,3] 20
o.d = [1,2,3];
console.log(o.b,o.d) // [1,2,3] [1,2,3]
o.d = function(){
    console.log(10)
}
console.log(o.b,o.d()) // can be changed
delete o.b
delete o.d
console.log(o) // d will be still there

