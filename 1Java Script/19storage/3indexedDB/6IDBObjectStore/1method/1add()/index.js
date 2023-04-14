/*
The add() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, creates a structured clone of the value, and stores the cloned value in the object store. 
This is for adding new records to an object store.

To determine if the add operation has completed successfully, listen for the transaction's complete event in addition to the IDBObjectStore.add request's success event, 
because the transaction may still fail after the success event fires. In other words, the success event is only triggered when the transaction has been successfully queued.

The add method is an insert only method. If a record already exists in the object store with the key parameter as its key, then an error ConstrainError event is fired on the returned request object. 
For updating existing records, you should use the IDBObjectStore.put method instead.


add(value)
add(value, key)
*/

const list = document.getElementById('list')
let db;
const request = indexedDB.open('newDatabase')


request.onerror = (e) => {
    list.innerHTML += `<li>Error Occured while opening the database: ${e.target.error}</li>`
}

request.onupgradeneeded = (e) => {
    db = request.result
    
    if(!db.objectStoreNames.contains('newObjectStore'))
    db.createObjectStore('newObjectStore',{keyPath: 'id'})
}

request.onsuccess = (e) => {
    db = request.result

    // making transaction 
    const tx = db.transaction('newObjectStore', 'readwrite')
    tx.onerror = (e) => {
        list.innerHTML += `<li>Error occured in transaction: ${e.target.error}</li>`
    }


    const store = tx.objectStore('newObjectStore')

    // adding object to store
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id: Date.now()}
    storeRequest = store.add(person)

    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Object added to the store successfully</li>`
    }

    storeRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
    }
}

