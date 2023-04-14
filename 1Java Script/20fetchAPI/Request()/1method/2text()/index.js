/*
The text() method of the Request interface reads the request body and returns it as a promise that resolves with a String. 
The response is always decoded using UTF-8.

*/

const text = 'Hello World!'

const request = new Request('/ExampleURL/Won"t/work', {
    method: 'post',
    body: text
})

request.text().then((data) => {
    console.log(data)       // Hello World!
})
