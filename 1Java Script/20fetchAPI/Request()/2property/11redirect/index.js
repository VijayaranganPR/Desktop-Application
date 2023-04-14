/*
The redirect read-only property of the Request interface contains the mode for how redirects are handled.

values:
    - follow
    - error
    - manual
*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.redirect)       // follow     (default)
