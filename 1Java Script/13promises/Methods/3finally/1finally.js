// finally is used to do some completion process 
// it does not take any parameters

p = new Promise((resolve,reject)=>{
    resolve('resolved')
})
p.then((value) => console.log(value))
p.catch((reason) => console.log(reason))
p.finally(()=> console.log('promise completed'))
/*
resolved
promise completed
*/



p1 = new Promise((resolve,reject)=>{
    reject('rejected')
})

p1.finally(()=> console.log('promise completed'))
.then((value) => console.log(value))
.catch((reason) => console.log(reason))



/*
promise completed
rejected
*/