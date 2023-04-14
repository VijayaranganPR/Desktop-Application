// response as json
async function jsonFunction(){
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await response.json()
    console.log(data)
}

jsonFunction()


// response as text
async function textFunction(){
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await response.text()
    console.log(data)
}

textFunction()


// // response as formData
// async function formDataFunction(){
//     response = await fetch('https://jsonplaceholder.typicode.com/users')
//     data = await response.formData()
//     console.log(data)
// }

// formDataFunction()


// response as blob
async function blobFunction(){
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await response.blob()
    console.log(data)
}

blobFunction()


// response as arrayBuffer
async function arrayBufferFunction(){
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await response.arrayBuffer()
    console.log(data)
}

arrayBufferFunction()


// response to read chunk by chunk
async function bodyFunction(){
    response = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await response.body
    console.log(data)
}

bodyFunction()
