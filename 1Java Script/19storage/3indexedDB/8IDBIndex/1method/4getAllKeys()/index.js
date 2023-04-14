/*
The getAllKeys() method of the IDBIndex interface asynchronously retrieves the primary keys of all objects inside the index, setting them as the result of the request object.


*/

const person = [
    {id: Date.now() + 1001, name: 'vijayarangan', country: 'india', age: 21, isOwned: true},
    {id: Date.now() + 1002, name: 'Raju', country: 'india', age: 56, isOwned: true},
    {id: Date.now() + 1003, name: 'Parimala', country: 'india', age: 48, isOwned: false},
    {id: Date.now() + 1004, name: 'swetha', country: 'India', age: 23, isOwned: false},
    {id: Date.now() + 1005, name: 'visali', country: 'India', age: 26, isOwned: false}
]

const list = document.getElementById('list')
let db;
const request = indexedDB.open('newDatabase')


request.onerror = (e) => {
    list.innerHTML += `<li>Error Occured while opening the database: ${e.error.message}</li>`
}

request.onupgradeneeded = (e) => {
    console.log(e.currentTarget) // current database
    db = request.result

    if (!db.objectStoreNames.contains('newObjectStore')) {
        store = db.createObjectStore('newObjectStore', {
            keyPath: 'id'
        })
    } else {
        store = e.currentTarget.transaction.objectStore('newObjectStore')
    }

    if (!store.indexNames.contains('nameIndex'))
        store.createIndex('nameIndex', 'name', {
            unique: false
        })

    if (!store.indexNames.contains('ageIndex'))
        store.createIndex('ageIndex', 'age', {
            unique: false
        })


    // adding object to store
    for (let i of person) {

        addStoreRequest = store.add(i)

        addStoreRequest.onsuccess = (e) => {
            list.innerHTML += `<li>Object added to the store successfully</li>`
        }

        addStoreRequest.onerror = (e) => {
            list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
        }

    }
}


request.onsuccess = (e) => {
    db = request.result

    // making transaction 
    const tx = db.transaction('newObjectStore', 'readwrite')
    tx.onerror = (e) => {
        list.innerHTML += `<li>Error occured in transaction: ${tx.error}</li>`
    }


    const store = tx.objectStore('newObjectStore')
    const index = store.index('nameIndex')

    // getting all keys from the index using getAllKeys
    indexRequest = index.getAllKeys()

    indexRequest.onsuccess = (e) => {
        console.log(indexRequest)
        list.innerHTML += `<li>all keys of the objects in index is ${indexRequest.result}</li>`
    }

    indexRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to get all keys of the index: ${indexRequest.error}</li>`
    }
        
}

