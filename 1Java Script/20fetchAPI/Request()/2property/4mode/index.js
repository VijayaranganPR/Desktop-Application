/*
The mode read-only property of the Request interface contains the mode of the request (e.g., cors, no-cors, same-origin, navigate or websocket.) 
This is used to determine if cross-origin requests lead to valid responses, and which properties of the response are readable.
*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.mode)       // cors     (default)
