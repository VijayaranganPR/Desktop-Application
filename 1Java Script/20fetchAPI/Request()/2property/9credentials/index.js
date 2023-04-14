/*
The credentials read-only property of the Request interface indicates whether the user agent should send or receive cookies from the other domain in the case of cross-origin requests.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.credentials)       // same-origin     (default)
