async function* asyncFunctionYield() {
    k = await new Promise(resolve => setTimeout(resolve, 1000, 'resolved'))
    console.log(k)
    console.log(k)
    yield 0
    yield 1
    yield 2
    throw new Error('error throwed')
}

g = asyncFunctionYield()
g.next()
/*
resolved
resolved
*/
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // { value: 0, done: false }
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // { value: 1, done: false }
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // { value: 2, done: false }
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // error throwed
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // undefined
.then((x) => {
    console.log(x)
    return g.next()}, (x) => console.log(x.message))    // { value: undefined, done: true }
