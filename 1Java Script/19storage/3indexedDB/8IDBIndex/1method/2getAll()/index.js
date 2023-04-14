/*
The getAll() method of the IDBIndex interface retrieves all objects that are inside the index.

There is a performance cost associated with looking at the value property of a cursor, because the object is created lazily. To use a feature like getAll(), the browser has to create all the objects at once. If you are just interested in looking at each of the keys, for instance, it is more efficient to use a cursor. If you are trying to get an array of all the objects in an object store, though, you should use getAll().



getAll()
getAll(query)
getAll(query, count)
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

    // getting all objects from the index using getAll()
    indexRequest = index.getAll()

    indexRequest.onsuccess = (e) => {
        console.log(indexRequest.result)
        for (let i of indexRequest.result){
            list.innerHTML += `<li>name: ${i.name}, age: ${i.age}</li>`

        }
    }

    indexRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to get object from the store: ${indexRequest.error}</li>`
    }
}

