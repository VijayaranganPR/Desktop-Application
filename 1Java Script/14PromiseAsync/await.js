/*
The await operator is used to wait for a Promise and get its fulfillment value. 
It can only be used inside an async function or at the top level of a module.

await will only be valid inside a async function(which will run Asynchronously if await is present)
*/


// normal await
function promise1(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('inside first promise'), 500)
    })
}

async function async1(){
    a = await promise1()
    console.log(a)
}
async1()
/* after 500ms
inside first promise
*/



// if error
// in promise function - you can you .catch()


function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject('reject caught: inside second promise'), 1000)
    })
}
async function async2(){
    a = await promise2().catch(err=>{
        return err
    })
    console.log(a)

}
async2()
//reject caught: inside second promise



// in thenable
thenable1 = {
    then(resolve){
        setTimeout(() => resolve('inside thenable resolved'), 1500)
    }
}
async function async3(){
    a = await thenable1
    console.log(a)
}
async3()
/* after one second
inside thenable resolved
*/



// if rejected
// in thenable
// handling using try catch
thenable2 = {
    then(resolve, reject){
        setTimeout(() => reject('reject caught: inside second thenable'), 2000)
    }
}
async function async4(){
    try{
        a = await thenable2
        console.log(a)
    }
    catch(err){
        console.log(err)
    }
    
}
async4()
// Error will be thrown



