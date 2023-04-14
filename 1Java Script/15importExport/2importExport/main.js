/*
before using import export install http-server:
1) Install live Server extention
2) open the html file via live server


all the files inside the imported files will also be exectued only once nomatter how many times it's imported

you can't use export inside a function
*/

import {a,b, add,obj} from './export1.js'
// this is inside export.js


// calling each element one by one
console.log(a)          // 10

// a = 30;              // properties will be imported as readonly 

console.log(b)          // 20

// b = 20;              // properties will be imported as readonly 

console.log(add())      // the add of 10 and 20 is 30

// add = 30             // properties will be imported as readonly 

console.log(obj)        // {a: 1, b: 2, c: 3}

obj.a = 10              // still we can change the attributes values

console.log(obj)        // {a: 10, b: 2, c: 3}




// calling default function (anonamous)
// you can use any name for this export default 
// below code is a shorthand of import {default as anyName} from './export1.js'
import anyName from './export1.js'
anyName()                   // this is inside export default anonamous function()




// calling grouply imported elements seperately
import {c,d,ClassA, ClassB} from './export1.js'
console.log(c)              // 30
console.log(d)              // 40
console.log(new ClassA)     // ClassA {n: 'ClassA'}
console.log(new ClassB)     // ClassA {n: 'ClassB'}




/*
we can also rename elements using 'as' keyword, 
to resolve raising errors because of two modules having same named features.
*/
import {e as element,Subrection} from './export1.js'
console.log(element)              // 50
console.log(Subrection())          // the sub of 30 and 40 is -10




/*
using * to import all the exportable features as a object
*/
import * as object from './export2.js'
console.log(object.first)           // 10
console.log(object.second)          // 20
