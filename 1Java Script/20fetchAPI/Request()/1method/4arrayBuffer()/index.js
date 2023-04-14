/*
The arrayBuffer() method of the Request interface reads the request body and returns it as a promise that resolves with an ArrayBuffer.

*/

const arr = new Uint8Array(10)

const request = new Request('/ExampleURL/Won"t/work',{
  method: 'post',
  body: arr
})

request.arrayBuffer().then((buffer) => {
    console.log(buffer)
});
