/*
The clone() method of the Request interface creates a copy of the current Request object.

Like the underlying ReadableStream.tee api, the body of a cloned Response will signal backpressure at the rate of the faster consumer of the two bodies, 
and unread data is enqueued internally on the slower consumed body without any limit or backpressure. Beware when you construct a Request from a stream and then clone it.

clone() throws a TypeError if the request body has already been used. 
In fact, the main reason clone() exists is to allow multiple uses of body objects (when they are one-use only.)
*/

const obj = {hello: 'world'}

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: JSON.stringify(obj)
})

// using clone to duplicate request
const newRequest = request.clone();

newRequest.json().then((data) => {
    console.log(data)       // {hello: 'world'}
}) 
