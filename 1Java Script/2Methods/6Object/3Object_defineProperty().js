/*
defines only one property
enumerable - wheather the property is counted or not
writable - can be overwritten or not
configurable - controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable ) can be changed.30-Oct-2022

*/

o = {a:1}
Object.defineProperty(o,'b',{
    value: 2,
    enumerable: true,
    configurable: true,
    writable: true,
})
console.log(o)
//{ a: 1, b: 2 }

// default
o = {a:1}
Object.defineProperty(o, 'b',{
    value: '1'
})
console.log(Object.getOwnPropertyDescriptors(o))
/*
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: {
    value: '1',
    writable: false,
    enumerable: false,
    configurable: false
  }
}
*/