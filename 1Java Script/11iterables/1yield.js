/*
must need to be inside function*

pause the function execution and re-enters

returns a object with two properties:
value: contains current value
done: boolean value wheather it's completed or not

yield can only be called directly from the generator function that contains it. 
It cannot be called from nested functions or from callbacks.
*/


console.log(`Basic example`);

iter = basic()
console.log(iter.next())
console.log(iter.next().value)
console.log(iter.next().done)
console.log(iter.next())
console.log(iter.next())

function* basic(){
    yield 1
    yield 2
    yield 3
    yield 4
}

/*
Basic example
{ value: 1, done: false }
2
false
{ value: 4, done: false }
{ value: undefined, done: true }
*/



console.log(``);
console.log(`creating infinite numbers`);
// creating infinite numbers

function* infiniteYield(){
    index = 0
    while(true){
        yield index
        index ++
    }
}

iter = infiniteYield()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: 7, done: false }
*/



console.log(``);
// passing parameters
// first parameter will be ignored
console.log(`passing parameters`);

function* passingParameter(a,b){
    console.log(a, b)
    console.log(1, yield)
    console.log(2, yield)
    console.log(4, yield)
}

iter = passingParameter(10,20)
iter.next('vijay')
iter.next('vijay 1')
iter.next('vijay 2')
iter.next('vijay 3')
iter.next('vijay 4')
iter.next('vijay 5')
/*
10 20
1 vijay 1
2 vijay 2
3 vijay 3
4 vijay 4
*/


console.log(``);
console.log(`using return`);
// using return - execution stops after return
function* usingReturn(){
    for(i = 0; i<10; i++){
        if(i === 3){
            return i
        }
        yield i
    }
}

iter = usingReturn()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/

