// yeild* is used to yeild values from another generator function

function* first(){
    yield 1
    yield 2
    yield 3
}

function* second(...arr){
    yield* first()
    yield* arr
    yield* '67'
    yield* [8,9]
}

iter = second(4,5)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: '6', done: false }
{ value: '7', done: false }
{ value: 8, done: false }
{ value: 9, done: false }
{ value: undefined, done: true }
*/



console.log(``);
// yield* expression itself
console.log(`yield* expression itself`);

function* first1(){
    yield* [1,2,3]
}
function* second(){
    yield* first1()
}

iter = second()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
