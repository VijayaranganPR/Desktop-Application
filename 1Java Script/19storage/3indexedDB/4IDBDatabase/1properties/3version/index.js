/*
The version property of the IDBDatabase interface is a 64-bit integer that contains the version of the connected database. 
When a database is first created, this attribute is an empty string.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase')

request.addEventListener('success', (e) => {
    db = request.result
    list.innerHTML += `<li>The database version is ${db.version}</li>`;          // older version number 
})
