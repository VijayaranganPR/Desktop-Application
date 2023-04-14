/*
The read-only body property of the Request interface contains a ReadableStream with the body contents that have been added to the request. 
Note that a request using the GET or HEAD method cannot have a body and null is returned in these cases.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.body)       // ReadableStream {locked: false}
