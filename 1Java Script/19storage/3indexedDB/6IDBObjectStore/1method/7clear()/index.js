/*
The clear() method of the IDBObjectStore interface creates and immediately returns an IDBRequest object, and clears this object store in a separate thread. 
This is for deleting all the current data out of an object store.

Clearing an object store consists of removing all records from the object store and removing all records in indexes that reference the object store. 
To remove only some of the records in a store, use IDBObjectStore.delete passing a key or IDBKeyRange.

count()
count(query)
*/

const list = document.getElementById('list')
let db;
const request = indexedDB.open('newDatabase')


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
    const person = [
        {id: Date.now()+1001, name: 'vijayarangan', country: 'india', age: 21, isOwned: true},
        {id: Date.now()+1002, name: 'Raju', country: 'india', age: 56, isOwned: true},
        {id: Date.now()+1003, name: 'Parimala', country: 'india', age: 48, isOwned: false},
        {id: Date.now()+1004, name: 'swetha', country: 'India', age: 23, isOwned: false},
        {id: Date.now()+1005, name: 'visali', country: 'India', age: 26, isOwned: false}
    ]

    for (let i of person){

        addStoreRequest = store.add(i)

        addStoreRequest.onsuccess = (e) => {
            list.innerHTML += `<li>Object added to the store successfully</li>`
        }

        addStoreRequest.onerror = (e) => {
            list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
        }

    }
    

    // getting object from the store using key

    getStoreRequest = store.clear()
    getStoreRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Database cleared successfully</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to clear database: ${e.target.error}</li>`
    }
}
