/*
The getAll() method of the IDBObjectStore interface returns an IDBRequest object containing all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.

If a value is successfully found, then a structured clone of it is created and set as the result of the request object.

This method produces the same result for:

    - a record that doesn't exist in the database
    - a record that has an undefined value

To tell these situations apart, you either call

    - the openCursor() method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.
    - the count() method with the same key, which will return 1 if the row exists and 0 if it doesn't.


getAll()
getAll(query)
getAll(query, count)
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
    getStoreRequest = store.getAll()

    getStoreRequest.onsuccess = (e) => {
        console.log(getStoreRequest.result)
        for (let i of getStoreRequest.result){
            list.innerHTML += `<li>Name of newly added object is ${i.name}</li>`

        }
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to get object from the store: ${e.target.error}</li>`
    }
}

