/*
The multiEntry read-only property of the IDBIndex interface returns a boolean value that affects how the index behaves when the result of evaluating the index's key path yields an array.

This is decided when the index is created, using the IDBObjectStore.createIndex method. This method takes an optional options parameter whose multiEntry property is set to true/false.

*/

let db;
let store;
const list = document.getElementById('list')

const request = indexedDB.open('newDatabase', 2)

request.onerror = (e) => {
    console.log(`error in opening the database`)
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

    if (!store.indexNames.contains('nameIndex')) {
        store.createIndex('nameIndex', 'name', {
            unique: false
        })
        console.log(`<li>nameIndex index created</li>`);
    }

    if (!store.indexNames.contains('ageIndex')) {
        store.createIndex('ageIndex', 'age', {
            unique: false
        })
        console.log(`<li>ageIndex index created</li>`)
    }
    
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
            console.log(`<li>Object added to the store successfully</li>`)
        }

        addStoreRequest.onerror = (e) => {
            console.log(`<li>failed to add object to the store: ${e.target.error}</li>`)
        }

    }
}

request.onsuccess = (e) => {
    db = request.result
    const tx = db.transaction('newObjectStore')
    const store = tx.objectStore('newObjectStore')
    const nameIndex = store.index('nameIndex')


    // getting multiEntry of the index using .multiEntry
    list.innerHTML += `<li>${nameIndex.multiEntry}</li>`


    const cursorRequest = nameIndex.openCursor()
    cursorRequest.onsuccess = (e) => {
        const cursor = cursorRequest.result

        if(cursor){
            console.log(`<li>name is ${cursor.value.name}</li>`)
            cursor.continue()
        }
        else{
            console.log(`<li>no more elements</li>`);
        }
    }
}
