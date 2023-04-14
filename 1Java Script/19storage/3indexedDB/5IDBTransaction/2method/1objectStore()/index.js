/*
The objectStore() method of the IDBTransaction interface returns an object store that has already been added to the scope of this transaction.

Every call to this method on the same transaction object, with the same name, 
returns the same IDBObjectStore instance. If this method is called on a different transaction object, 
a different IDBObjectStore instance is returned.

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

    // accessing store
    const store = tx.objectStore('newObjectStore')
    store.add(person)


    list.innerHTML += `Store accessed`;

}
