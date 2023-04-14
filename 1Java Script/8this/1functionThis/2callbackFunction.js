// in callback function
console.log(`in callback function`);
console.log(``);

function topFun2(){
    console.log(this)
}


console.log(``);
// without thisarg
// in non strict mode it will return global object values
// in strict mode it will return undefined
console.log(`without thisarg`);

[1,2,3,4].forEach(topFun2)
/*
returns all values of global object 
*/



console.log(``);
// with thisArg
console.log(`with thisArg`);

[1,2,3,4].forEach(topFun2,{name:'thisarg1'})
/* 
with thisArg
{ name: 'thisarg1' }
{ name: 'thisarg1' }
{ name: 'thisarg1' }
{ name: 'thisarg1' }
 */