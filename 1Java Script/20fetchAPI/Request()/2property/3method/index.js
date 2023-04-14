/*
The method read-only property of the Request interface contains the request's method (GET, POST, etc.)
*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.method)       // POST
