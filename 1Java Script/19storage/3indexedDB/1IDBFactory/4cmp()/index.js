/*
The cmp() method of the IDBFactory interface compares two values as keys 
to determine equality and ordering for IndexedDB operations, 
such as storing and iterating.

indexedDB.cmp(first, last)

first > last = 1
first < last = -1
first == first = 0
*/

const a = 1;
const b = 2;

console.log(window.indexedDB.cmp(a,b))  // -1
console.log(window.indexedDB.cmp(b,a))  // 1
console.log(window.indexedDB.cmp(a,a))  // 0 
