/*
The IDBTransaction.error property of the IDBTransaction interface returns the type of error when there is an unsuccessful transaction.
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

    tx.oncomplete = (e) => {
        list.innerHTML += `Transaction completed successfully`;
    }

    tx.onerror = (e) => {
        // error property - adding same element null
        list.innerHTML += `Transaction fail Error: ${tx.error}`
    }
}
