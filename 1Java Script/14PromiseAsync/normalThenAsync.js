function promise(){
    return new Promise(resolve => {
        
        setTimeout(() => {
            console.log(`****************after one second***************`);
            resolve('resolved')},1000)
    })
}

// normal promise
console.log(promise())

// promise with then
promise().then(() => console.log('resolved in then'))

// promise with await
async function asyncFunction(){
    value = await promise();
    console.log(value)
}
asyncFunction()

console.log(`end of code`);
/* log in order
Promise { <pending> }
end of code
****************after one second***************
****************after one second***************
resolved in then
****************after one second***************
resolved
*/
