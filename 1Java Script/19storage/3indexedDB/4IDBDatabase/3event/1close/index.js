/*
The close event is fired on IDBDatabase when the database connection is unexpectedly closed. 
This could happen, for example, 
if the underlying storage is removed or if the user clears the database in the browser's history preferences.

Note that it is not fired if the database connection is closed normally using IDBDatabase.close().
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',6)

request.onupgradeneeded = (e) => {
    db = request.result
    if(!db.objectStoreNames.contains('newObjectStore')){
        db.createObjectStore('newObjectStore',{keyPath: 'id'})
        list.innerHTML += `<li>Object store created</li>`;          // older version number 
    }
}

request.onsuccess = (e) => {
    db = request.result
    db.close()       // no effect
    db.onclose = () => {
        list.innerHTML += `<li>Database closed</li>`;
    }
    list.innerHTML += `<li>Database is still open</li>`;
}
