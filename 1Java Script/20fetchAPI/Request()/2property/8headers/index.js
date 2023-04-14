/*
The headers read-only property of the Request interface contains the Headers object associated with the request.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.headers.get('Content-Type'))       // text/plain;charset=UTF-8     (default)
