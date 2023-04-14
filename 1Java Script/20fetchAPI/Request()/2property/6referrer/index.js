/*
The referrer read-only property of the Request interface is set by the user agent to be the referrer of the Request. 
(e.g., client, no-referrer, or a URL.)
*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.referrer)       // about:client     (default)
