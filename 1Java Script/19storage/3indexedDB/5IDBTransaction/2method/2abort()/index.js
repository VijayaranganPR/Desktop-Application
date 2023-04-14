/*
The abort() method of the IDBTransaction interface rolls back all the changes to objects in the database associated with this transaction.

All pending IDBRequest objects created during this transaction have their IDBRequest.error attribute set to an AbortError DOMException.

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
    person = {name: 'Vijayarangan', age: 21, id: Date.now()}
    
    // make transaction
    const tx = db.transaction(['newObjectStore'], 'readwrite')
    const store = tx.objectStore('newObjectStore')
    store.add(person)

    // aborting transaction
    tx.abort()      // adding won't take effect

    list.innerHTML += `Transaction abort`;
    
}
