/*
The cache read-only property of the Request interface contains the cache mode of the request. It controls how the request will interact with the browser's HTTP cache.

*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.cache)       // default
