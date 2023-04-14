/*
returns the descriptions of the property.
object returned is mutable but mutating it has no effect on the original property's configuration.
*/

o = {a: 1}
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
    }
})
descriptor = Object.getOwnPropertyDescriptor(o,'c');
console.log(descriptor)
// { value: 3, writable: false, enumerable: false, configurable: false }