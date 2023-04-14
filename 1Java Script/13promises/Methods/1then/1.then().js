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


returnedThen = p.then((value)=> console.log(value), (reason) => console.log(reason))

/*
on success:
0.6422779631193014
success

on failure:
0.37063118215951607
failure
*/



