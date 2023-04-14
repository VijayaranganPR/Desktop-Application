
console.log = (message) => { 
    console.info('manipulated ' + message)
    fetch('http://localhost:3000/write', {
        method: 'post',
        body: message,
        headers:{
            'Content-Type': 'text/plain'
        } 
    })
}