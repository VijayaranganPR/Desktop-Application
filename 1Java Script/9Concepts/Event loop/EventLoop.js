function firstNormal(){
    console.log('first')
}
function secondTimer(){
    setTimeout(()=> console.log('secondTimer') ) 
}
function thirdPromise(){
    Promise.resolve('thirdPromise').then((x) => console.log(x))
}
function fourthNormal(){
    console.log('fourth')
}

firstNormal()           // will be executed in global context
secondTimer()           // will be added to the webAPI then added to callback queue
thirdPromise()          // will be executed by microtask queue
fourthNormal()          // will be executed in global context

/*
first
fourth
thirdPromise
secondTimer
*/