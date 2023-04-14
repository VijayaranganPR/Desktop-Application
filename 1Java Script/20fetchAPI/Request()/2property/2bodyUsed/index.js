/*
The read-only bodyUsed property of the Request interface is a boolean value that indicates whether the request body has been read yet.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})

// body is still not used
console.log(request.bodyUsed)       // false


request.text()
.then((data) => console.log(request.bodyUsed))  // true
