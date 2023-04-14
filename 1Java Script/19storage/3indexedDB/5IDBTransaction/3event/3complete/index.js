/*
The complete event of the IndexedDB API is fired when the transaction successfully completed.
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

    // on error event executed
    tx.oncomplete = (e) => {
        list.innerHTML += `Transaction completed`;
    }
}
