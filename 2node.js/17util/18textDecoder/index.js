/*
An implementation of the WHATWG Encoding Standard TextDecoder API.
*/

const decoder = new TextDecoder();
const u8arr = new Uint8Array([72, 101, 108, 108, 111]);
console.log(decoder.decode(u8arr)); // Hello