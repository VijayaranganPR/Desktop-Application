/*
The index() method of the IDBObjectStore interface opens a named index in the current object store, after which it can be used to, 
for example, return a series of records sorted by that index using a cursor.
*/

let db;
let store;
const list = document.getElementById('list')

const request = indexedDB.open('newDatabase', 6)

request.onerror = (e) => {
    list.innerHTML += `error in opening the database`
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
}

request.onsuccess = (e) => {
    db = request.result

    const tx = db.transaction('newObjectStore', 'readonly')
    
    tx.onerror = (e) => {
        list.innerHTML += `error in makeing transaction: ${tx.error}`
    }
    const store = tx.objectStore('newObjectStore')
    
    // creating index using index()
    const index = store.index('nameIndex')
    const indexRequest = index.get('vijayarangan')
    
    indexRequest.onsuccess = () => {
        list.innerHTML += `successing in getting name from index: ${indexRequest.result.name}`
    }

    indexRequest.onerror = () => {
        list.innerHTML += `error in makeing indexRequest: ${tx.error}`
    }
}
