/*
The getAllKeys() method of the IDBObjectStore interface returns an IDBRequest object retrieves record keys for all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.

If a value is successfully found, then a structured clone of it is created and set as the result of the request object.

This method produces the same result for:

    - a record that doesn't exist in the database
    - a record that has an undefined value
To tell these situations apart, you need to call the openCursor() method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.

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
    const person = [{
        id: Date.now() + 1001,
        name: 'vijayarangan',
        country: 'india',
        age: 21,
        isOwned: true
    },
    {
        id: Date.now() + 1002,
        name: 'Raju',
        country: 'india',
        age: 56,
        isOwned: true
    },
    {
        id: Date.now() + 1003,
        name: 'Parimala',
        country: 'india',
        age: 48,
        isOwned: false
    },
    {
        id: Date.now() + 1004,
        name: 'swetha',
        country: 'India',
        age: 23,
        isOwned: false
    },
    {
        id: Date.now() + 1005,
        name: 'visali',
        country: 'India',
        age: 26,
        isOwned: false
    }
]

for (let i of person) {

    addStoreRequest = store.add(i)

    addStoreRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Object added to the store successfully</li>`
    }

    addStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
    }

}


    // getting all objects from the store using key
    getStoreRequest = store.getAllKeys()

    getStoreRequest.onsuccess = (e) => {
        console.log(getStoreRequest)
        list.innerHTML += `<li>all keys of the objects in object store is ${getStoreRequest.result}</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to get all keys of the object store: ${e.target.error}</li>`
    }
        
}

