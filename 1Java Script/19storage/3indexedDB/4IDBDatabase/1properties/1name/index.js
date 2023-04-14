/*
The name read-only property of the IDBDatabase interface is a string that contains the name of the connected database.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase')

request.addEventListener('success', (e) => {
    db = request.result
    list.innerHTML += `<li>The database name is ${db.name}</li>`;          // older version number 
})
