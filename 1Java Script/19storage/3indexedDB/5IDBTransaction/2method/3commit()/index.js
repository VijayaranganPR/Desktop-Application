/*
The commit() method of the IDBTransaction interface commits the transaction if it is called on an active transaction.

Note that commit() doesn't normally have to be called — a transaction will automatically commit when all outstanding requests have been satisfied and no new requests have been made. 
commit() can be used to start the commit process without waiting for events from outstanding requests to be dispatched.

If it is called on a transaction that is not active, it throws an InvalidStateError DOMException.
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

    // commiting transaction
    tx.commit()      
    
    list.innerHTML += `Transaction commited`;

    // adding again
    person = {name: 'Vijayarangan', age: 21, id: Date.now()}
    // store.add(person)       // Error transaction finished
    
}
