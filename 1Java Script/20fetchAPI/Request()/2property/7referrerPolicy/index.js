/*
The referrerPolicy read-only property of the Request interface returns the referrer policy, 
which governs what referrer information, sent in the Referer header, should be included with the request.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.referrerPolicy)       // ""     (default)
