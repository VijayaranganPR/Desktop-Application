/*
we can you import() in case where we can use to manage storage.
we can also you import() incase we don't want to use type = 'module' in script.
import() will return a promise which is resolved with module object.

*/
import('./module/export1.js').then((x) => {
    console.log(x)              // module
    console.log(x.first)        // 10
    console.log(x.second)})     // 20
// console.log(x.first)      will give error ReferenceError: x is not defined



import('./module/export2.js').then((x) => {
    console.log(x)              // module
    console.log(x.third)        // 30
    console.log(x.fourth)})     // 40
// console.log(x.third)      will give error ReferenceError: x is not defined


import('./module/export3.js').then((x) => {
    console.log(x)              // module
    console.log(x.fifth)        // 50
    console.log(x.sixth)})      // 60
// console.log(x.fifth)      will give error ReferenceError: x is not defined

