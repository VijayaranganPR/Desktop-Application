/*
The integrity read-only property of the Request interface contains the subresource integrity value of the request.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.integrity)       // ""     (default)
