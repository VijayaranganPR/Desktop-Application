/*
The error event is fired on IDBTransaction when a request returns an error and the event bubbles up to the transaction object.

This event bubbles to IDBDatabase. The event.target property refers to the IDBTransaction object that bubbles up.

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
    
    
    // adding same person again
    store.add(person)       
    
    // on error event executed
    tx.onerror = (e) => {
        list.innerHTML += `Transaction error: ${tx.error}`;
    }
}
