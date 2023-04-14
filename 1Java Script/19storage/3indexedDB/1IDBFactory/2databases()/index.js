/*
The databases method of the IDBFactory interface returns a list representing all the available databases, 
including their names and versions.

list all the database available in array of objects
*/

const list = document.getElementById('list')

const request1 = indexedDB.open('database1')
const request2 = indexedDB.open('database2', 4)

const promise = indexedDB.databases()
promise.then((db) => {
    console.log(db)
})
/* 
[
    {name: 'database1', version: 1},
    {name: 'database2', version: 4}
]
*/
