/*
The blob() method of the Request interface reads the request body and returns it as a promise that resolves with a Blob.
*/

const obj = { hello: 'world' };
const myBlob = new Blob(
  [JSON.stringify(obj, null, 2)],
  { type : 'application/json' },
);

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: myBlob,
});

request.blob().then((myBlob) => {
    console.log(myBlob)
});
