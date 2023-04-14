/* 
used to enable await

returns a promise even the value is not a promise
*/

// returning a promise
function promise1(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('inside first promise1'), 500)
    })
}

async function async1(){
    a = await promise1()
    console.log(a)
    return a
}
returnedFromAsync1 = async1()
returnedFromAsync1.then((x) => console.log(x))

/* 
inside first promise1
inside first promise1 
*/


// returning a string
function promise2(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('inside first promise2'), 500)
    })
}

async function async2(){
    a = await promise2()
    console.log(a)
    return 'returning a string, will be converted as promise'
}
returnedFromAsync2 = async2()
returnedFromAsync2.then((x) => console.log(x))

/* 
inside first promise2
returning a string, will be converted as promise
*/


// throwing a error
function promise3(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('inside first promise3'), 500)
    })
}

async function async3(){
    a = await promise3()
    console.log(a)
    throw new Error('Error: Error message inside async3')
}
returnedFromAsync3 = async3()
returnedFromAsync3.then((x) => console.log(x),(x) => console.log(x.message))

/* 
inside first promise3
Error: Error message inside async3
*/



