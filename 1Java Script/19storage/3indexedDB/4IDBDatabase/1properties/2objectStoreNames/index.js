/*
The objectStoreNames read-only property of the IDBDatabase interface is a DOMStringList containing a list of the names of the object stores currently in the connected database.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',2)

request.onupgradeneeded = (e) => {
    db = request.result

    if(!db.objectStoreNames.contains('objectStore1'))
    db.createObjectStore('objectStore1',{keyPath: 'id'})

    if(!db.objectStoreNames.contains('objectStore2'))
    db.createObjectStore('objectStore2',{keyPath: 'id'})

}

request.addEventListener('success', (e) => {
    db = request.result

    for(let i of db.objectStoreNames){
        list.innerHTML += `<li>The Object name is ${i}</li>`;          
    }
})
