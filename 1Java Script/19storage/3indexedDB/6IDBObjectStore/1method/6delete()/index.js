/*
The delete() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, deletes the specified record or records.

Either a key or an IDBKeyRange can be passed, allowing one or multiple records to be deleted from a store. To delete all records in a store, use IDBObjectStore.clear.

Bear in mind that if you are using a IDBCursor, you can use the IDBCursor.delete() method to more efficiently delete the current record — without having to explicitly look up the record's key.

*/

const list = document.getElementById('list')
let db;
const request = indexedDB.open('newDatabase')

console.log('hi')
request.onerror = (e) => {
    list.innerHTML += `<li>Error Occured while opening the database: ${e.error.message}</li>`
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
        list.innerHTML += `<li>Error occured in transaction: ${tx.error}</li>`
    }

    const store = tx.objectStore('newObjectStore')

    // adding object to store
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id: Date.now()}
    addStoreRequest = store.add(person)
    let key = person.id
    console.log(key)

    addStoreRequest.onsuccess = (e) => {
    list.innerHTML += `<li>Object added to the store successfully</li>`
    }

    addStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
    }


    // deleting object from the store using key
    getStoreRequest = store.delete(key)

    getStoreRequest.onsuccess = (e) => {
        console.log(getStoreRequest)
        list.innerHTML += `<li>Object deleted from the store successfully</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>faild to delete object from the store</li>`
    }
}

