/*
The deleteObjectStore() method of the IDBDatabase interface destroys the object store with the given name in the connected database, along with any indexes that reference it.

As with IDBDatabase.createObjectStore, this method can be called only within a versionchange transaction.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',6)

request.addEventListener('upgradeneeded', (e) => {
    db = request.result
    
    if(!db.objectStoreNames.contains('newObjectStore')){
        db.createObjectStore('newObjectStore',{keyPath: 'id'})
        list.innerHTML += `<li>Object store created</li>`;          // older version number 
    }


    if(db.objectStoreNames.contains('newObjectStore')){
        db.deleteObjectStore('newObjectStore')
        list.innerHTML += `<li>Object store deleted</li>`;          // older version number 
    }
})
request.addEventListener('success', (e) => {
    list.innerHTML += `<li>Change version to creat and delete object Store</li>`;          // older version number 
})
