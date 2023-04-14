/*
The json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.

Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

*/

const obj = {hello: 'world'}

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: JSON.stringify(obj)
})

request.json().then((data) => {
    console.log(data)       // {hello: 'world'}
}) 

