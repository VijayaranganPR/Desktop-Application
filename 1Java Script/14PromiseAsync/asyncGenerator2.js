async function* asyncFunctionYield() {
    k = new Promise(resolve => setTimeout(resolve, 1000, 'resolved'))
    console.log(k)
    console.log(k)
    yield 0
    yield 1
    yield 2
    // throw new Error('error throwed')
}


// async funtion always returns a promise so use await in for loop to wait for the completion of each promise
async function read(){
    for await (let i of asyncFunctionYield()){
        setTimeout(() => {
            console.log(i)
        }, 1000*i);
    }
}
read()
/*
Promise { <pending> }
Promise { <pending> }
0
1
2
*/