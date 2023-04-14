/*
The put() method of the IDBObjectStore interface updates a given record in a database, or inserts a new record if the given item does not already exist.

It returns an IDBRequest object, and, in a separate thread, creates a structured clone of the value and stores the cloned value in the object store. 
This is for adding new records, or updating existing records in an object store when the transaction's mode is readwrite. If the record is successfully stored, 
then a success event is fired on the returned request object with the result set to the key for the stored record, and the transaction set to the transaction in which this object store is opened.

The put method is an update or insert method. See the IDBObjectStore.add method for an insert only method.

Bear in mind that if you have a IDBCursor to the record you want to update, updating it with IDBCursor.update() is preferable to using IDBObjectStore.put(). 
Doing so makes it clear that an existing record will be updated, instead of a new record being inserted.

put(item)
put(item, key)
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
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id: Date.now()}
    addStoreRequest = store.add(person)
    let key = person.id

    addStoreRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Object added to the store successfully</li>`
    }

    addStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
    }


    // getting object from the store using key

    const person2 = {name: 'sakthi', age:21, country: "India", id: key}
    console.log(key)
    getStoreRequest = store.put(person2)
    getStoreRequest.onsuccess = (e) => {
        list.innerHTML += `<li>object updated successfully: ${e.target.result}</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to update object to the store: ${e.target.error}</li>`
    }
}

