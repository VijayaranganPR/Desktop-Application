/*
The get() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, 
returns the object store selected by the specified key. This is for retrieving specific records from an object store.

If a value is successfully found, then a structured clone of it is created and set as the result of the request object.
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
    getStoreRequest = store.getKey(key)

    getStoreRequest.onsuccess = (e) => {
        console.log(getStoreRequest)
        list.innerHTML += `<li>Key of newly added object is ${getStoreRequest.result}</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to get Key of newly added object: ${e.target.error}</li>`
    }


        
}

