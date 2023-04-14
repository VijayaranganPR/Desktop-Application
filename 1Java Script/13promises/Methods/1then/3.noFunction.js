// if nothing inside the function 
// for resolve = it is internally replaced with an identity function ((x) => x) 
// for reject = it is internally replaced with a thrower function ((x) => { throw x; })
const p = new Promise((resolve,reject)=>{
    m = Math.random()
    if(m>0.5){
        console.log(m)
        resolve('success')
    }
    else{
        console.log(m)
        reject('failure')
    }
})



p.then(2).then(30).then((value) => console.log(value))

/*
on success:
0.5647865465149566
success

on failure:
0.21737183392020687
node:internal/process/promises:288          Error
*/