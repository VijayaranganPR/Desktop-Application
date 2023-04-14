/*
returns all the descriptions of each property
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
descriptor = Object.getOwnPropertyDescriptors(o);
console.log(descriptor)
// {
//     a: { value: 1, writable: true, enumerable: true, configurable: true },
//     b: { value: 2, writable: true, enumerable: true, configurable: true },
//     c: { value: 3, writable: false, enumerable: false, configurable: false }
//   }