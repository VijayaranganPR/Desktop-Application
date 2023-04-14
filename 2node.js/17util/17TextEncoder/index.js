/*
An implementation of the WHATWG Encoding Standard TextEncoder API. All instances of TextEncoder only support UTF-8 encoding.
*/

const encoder = new TextEncoder();
const uint8array = encoder.encode('this is some data');
console.log(uint8array)
/*
Uint8Array(17) [
  116, 104, 105, 115,  32,
  105, 115,  32, 115, 111,
  109, 101,  32, 100,  97,
  116,  97
]
*/