// async will only be asynchronous if it encountered an await.

// Code after each await expression can be thought of as existing in a .then callback.

// without await
console.log(`without await`);

async function asyncFunctionWithoutAwait(){
    console.log('asyncFunctionWithoutAwait start')

    console.log('asyncFunctionWithoutAwait end')
}
asyncFunctionWithoutAwait()
console.log('console after asyncFunctionWithoutAwait')

/*
without await
asyncFunctionWithoutAwait start
asyncFunctionWithoutAwait end
console after asyncFunctionWithoutAwait
*/



console.log(``);
// with await
console.log(`with await`);
async function asyncFunctionWithawait(){
    console.log('inside asyncFunctionWithawait start')
    await null
    console.log('inside asyncFunctionWithawait end')
}
asyncFunctionWithawait()
console.log('console after asyncFunctionWithawait ')
/*
with await
inside asyncFunctionWithawait start
console after asyncFunctionWithawait
inside asyncFunctionWithawait end
*/



console.log(``);
// without await
console.log(`without await`);
function anotherPromise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('resolved in anotherPromise'),2000)
    })
}
async function promise() {
    return anotherPromise()
}

console.log('before calling promise')
p= promise();
console.log(p)
console.log('end of the code')

/*
before calling promise
Promise { <pending> }
end of the code
*/


console.log(``);
// with await
console.log(`with await`);

function anotherPromise1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('resolved in anotherPromise'),2000)
    })
}
async function promise1() {
    return await anotherPromise1()
}

console.log('before calling promise')
p= promise1();
console.log(p)
console.log('end of the code')

/*
before calling promise
Promise { <pending> }
end of the code
*/