console.log('this is inside export.js')

// exporting each element one by one.
export const a = 10
export let b = 20
export function add(){
    return `the add of 10 and 20 is ${a+b}`
}
export const obj = {a:1,b:2,c:3};



// you can use only one export default
export default function(){
    console.log('this is inside export default anonamous function()')
}

// exporting elements in group
export class ClassA{
    constructor() {
        this.n = 'ClassA'
    }
}
export class ClassB{
    constructor(){
        this.n = 'ClassB'
    }
}

const c = 30;
let d = 40;
var e = 50;

function sub(){
    return `the sub of 30 and 40 is ${c-d}`
}

export {c,d,e,sub as Subrection};


// import {k} from './summa'
// console.log(k)
