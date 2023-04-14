// if nothing retuned, undefined will be send
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



p.then((value) => console.log(value),(reject) => console.log(reject)).then((value) => console.log(value))

/*
on success:
0.8909882826889122
success
undefined

on failure:
0.3144872293954222
failure
undefined
*/