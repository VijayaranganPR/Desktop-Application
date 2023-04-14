/*
The value read-only property of the IDBCursorWithValue interface returns the value of the current cursor, 
whatever that is.
*/

let db;
let store;
const list = document.getElementById('list')

const request = indexedDB.open('newDatabase', 2)

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
    const tx = db.transaction('newObjectStore')
    const store = tx.objectStore('newObjectStore')


    // opening cursor using openCursor()
    const cursorRequest = store.openCursor()
    cursorRequest.onsuccess = (e) => {
        const cursor = cursorRequest.result

        if(cursor){
            list.innerHTML += `<li>name is ${cursor.value.name}</li>`

            // proceeding to next item using .continue()
            cursor.continue()
        }
        else{
            list.innerHTML += `<li>no more elements</li>`
        }
    }
}
