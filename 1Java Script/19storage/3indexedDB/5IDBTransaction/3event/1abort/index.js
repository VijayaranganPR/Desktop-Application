/*
The abort event is fired when an IndexedDB transaction is aborted.

This can happen for any of the following reasons:

    - Bad requests, (E.g., trying to add the same key twice, or put the same index key when the key has a uniqueness constraint).
    - An explicit abort() call.
    - An uncaught exception in the request's success/error handler.
    - An I/O error (an actual failure to write to disk, for example disk detached, or other OS/hardware failure).
    - Quota exceeded.

This non-cancelable event bubbles to the associated IDBDatabase object.

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
    person = {name: 'Vijayarangan', age: 21, id: 1}
    
    // make transaction
    const tx = db.transaction(['newObjectStore'], 'readwrite')
    const store = tx.objectStore('newObjectStore')
    store.add(person)

    // aborting transaction
    tx.abort()      // adding won't take effect

    tx.onabort = (e) => {
        list.innerHTML += `Transaction aborted`;
    }
    
}
