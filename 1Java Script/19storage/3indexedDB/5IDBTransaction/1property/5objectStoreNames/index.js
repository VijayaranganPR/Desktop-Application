/*
The objectStoreNames read-only property of the IDBTransaction interface returns a DOMStringList of names of IDBObjectStore objects.

*/

const list = document.getElementById('list')

let db;

const request = indexedDB.open('newDatabase');

request.onerror = (e) => {
    list.innerHTML += `Error occured: ${request.error.message}`
}

request.onupgradeneeded = (e) => {
    db = request.result

    if(!db.objectStoreNames.contains('newObjectStore1'))
    db.createObjectStore('newObjectStore1',{keyPath: 'id'})

    if(!db.objectStoreNames.contains('newObjectStore2'))
    db.createObjectStore('newObjectStore2',{keyPath: 'id'})

}

request.onsuccess = (e) => {
    db = request.result

    // make transaction
    const tx = db.transaction(['newObjectStore1','newObjectStore2'], 'readwrite')

    // objectStoreNames property
    for(let i of tx.objectStoreNames){
        list.innerHTML += `objectStoreNames property returns ${i}`;
        console.log(i)      
    }
}
