/*
The createObjectStore() method of the IDBDatabase interface creates and returns a new IDBObjectStore.

The method takes the name of the store as well as a parameter object that lets you define important optional properties. 
You can use the property to uniquely identify individual objects in the store. 
As the property is an identifier, it should be unique to every object, and every object should have that property.

This method can be called only within a versionchange transaction.
(we can also call it inside success but to keep the record clear we calling it inside upgradeneeded)
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',4)

request.addEventListener('upgradeneeded', (e) => {
    db = request.result

    if(!db.objectStoreNames.contains('newObjectStore'))
    db.createObjectStore('newObjectStore',{keyPath: 'id'})

    list.innerHTML += `<li>Object store created</li>`;          // older version number 
})
request.addEventListener('success', (e) => {

    list.innerHTML += `<li>Change version to creat object Store</li>`;          // older version number 
})
