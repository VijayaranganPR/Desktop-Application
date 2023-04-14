/*
The deleteIndex() method of the IDBObjectStore interface destroys the index with the specified name in the connected database, used during a version upgrade.

Note that this method must be called only from a VersionChange transaction mode callback. Note that this method synchronously modifies the IDBObjectStore.indexNames property.

*/

let db;
let store;
const list = document.getElementById('list')

const request = indexedDB.open('newDatabase', 1)

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

    if (!store.indexNames.contains('nameIndex')) {
        store.createIndex('nameIndex', 'name', {
            unique: false
        })
        list.innerHTML += `<li>nameIndex index created</li>`
    }

    if (!store.indexNames.contains('ageIndex')) {
        store.createIndex('ageIndex', 'age', {
            unique: false
        })
        list.innerHTML += `<li>ageIndex index created</li>`
    }


    if (store.indexNames.contains('nameIndex')) {
    // deleteing index using .deleteIndex()
        store.deleteIndex('nameIndex', 'name', {
            unique: false
        })
        list.innerHTML += `<li>nameIndex index deleted</li>`
    }

    if (store.indexNames.contains('ageIndex')) {
    // deleteing index using .deleteIndex()
        store.deleteIndex('ageIndex', 'age', {
            unique: false
        })
        list.innerHTML += `<li>ageIndex index deleted</li>`
    }

}

request.onsuccess = (e) => {}