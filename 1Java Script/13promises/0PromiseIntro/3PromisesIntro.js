/*
Promises are asynchronous which will be stated and do one function and returns wheather the task is resolved or rejected
use resolve('some message') to send message if the process is successed.
use reject('some message') to send message if the process is failed.

we can see and use the message by using then
then(on_success(returned message),on_failure(returned message)) 
both on_success and on_failure are functions will be executed based on the return from the promise

there is a seperate method for failure
catch(on_failure(returned message))
*/


console.log('before promise')

promiseObject = new Promise((resolve, reject) =>{
  
    setTimeout(()=>{

        console.log('\ninside Promise')
        randomValue = Math.random()
        if(randomValue>0.5){
            console.log(`randomValue = ${randomValue}`)
            resolve('Success we got greater number')
        }
        else{
            console.log(`randomValue = ${randomValue}`)
            reject(`Failure we got lesser number`);
        }
        console.log(promiseObject)
        console.log('exiting promise\n')

    })
})

console.log(`after promise`);

console.log(promiseObject)

promiseObject.then((retunedFromPromise) => console.log(`in 'then' the returned from promise is ${retunedFromPromise}`), 
(retunedFromPromise) => console.log(`in 'then' the returned from promise is ${retunedFromPromise}`))

promiseObject.catch((retunedFromPromise) => console.log(`in 'catch' the returned from promise is ${retunedFromPromise}`))
console.log(`after then`);


// For success: 
/*
before promise
after promise
Promise { <pending> }
after then

inside Promise
randomValue = 0.9085904205695301
Promise { 'Success we got greater number' }
exiting promise

in 'then' the returned from promise is Success we got greater number
*/


// for Failure
/*
before promise
after promise
Promise { <pending> }
after then

inside Promise
randomValue = 0.22690089047164919
Promise { <rejected> 'Failure we got lesser number' }
exiting promise

in 'then' the returned from promise is Failure we got lesser number
in 'catch' the returned from promise is Failure we got lesser number
*/