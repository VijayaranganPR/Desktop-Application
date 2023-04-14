p = new Promise((resolve, reject) => {
    throw Error('some message')
})

p.catch((reason) => {
    console.log(reason.message)
    return 'some new message'
})
.then((value) => {
    console.log(value)
    throw 'new error'
})
.catch((reason) => {

    console.log(reason)
    throw 'again new error'
})
.catch((reason) => {

    console.log(reason)
})

/*
some message
some new message
new error
again new error
*/