console.log(``);
// returning a string as promise
console.log(`returning a string as promise`);
function anotherPromise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('resolved in anotherPromise'),2000)
    })
}
async function promise() {
    return 'string will be returned as resolved promise'
}

console.log('before calling promise')
p= promise();
console.log(p)
console.log('end of the code')

/*
returning a string as promise
before calling promise
Promise { 'string will be returned as resolved promise' }
end of the code
*/


console.log(``);
// returning a promise
console.log(`returning a promise`);

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
returning a promise
before calling promise
Promise { <pending> }
end of the code
*/