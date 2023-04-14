/*
db property in tx will return the current database
*/

const list = document.getElementById('list')

let db;

const request = indexedDB.open('newDatabase');

request.onerror = (e) => {
    list.innerHTML += `Error occured: ${request.error.message}`
}

request.onupgradeneeded = (e) => {
    db = request.result

    if(!db.objectStoreNames.contains('newObjectStore'))
    db.createObjectStore('newObjectStore',{keyPath: 'id'})
}

request.onsuccess = (e) => {
    db = request.result

    // make transaction
    const tx = db.transaction(['newObjectStore'], 'readwrite')

    // db property
    list.innerHTML += `db property returns ${tx.db}`;
    console.log(tx.db)      // IDBDatabase {name: 'newDatabase', version: 1, objectStoreNames: DOMStringList, onabort: null, onclose: null, …}
}
