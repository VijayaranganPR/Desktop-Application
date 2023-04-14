/*
The createIndex() method of the IDBObjectStore interface creates and returns a new IDBIndex object in the connected database. It creates a new field/column defining a new data point for each database record to contain.

Bear in mind that IndexedDB indexes can contain any JavaScript data type; IndexedDB uses the structured clone algorithm to serialize stored objects, which allows for storage of simple and complex objects.

Note that this method must be called only from a VersionChange transaction mode callback.
*/

let db;
let store;
const list = document.getElementById('list')

const request = indexedDB.open('newDatabase',6)

request.onerror = (e) => {
    list.innerHTML += `error in opening the database`
}

request.onupgradeneeded = (e) => {
        console.log(e.currentTarget)        // current database
        db = request.result

    if(!db.objectStoreNames.contains('newObjectStore')){
        store = db.createObjectStore('newObjectStore', {keyPath: 'id'})
    }
    else{
        store = e.currentTarget.transaction.objectStore('newObjectStore')
    }

    if(!store.indexNames.contains('nameIndex'))
    // creating index using .createIndex()
    store.createIndex('nameIndex', 'name',{unique: false})

    if(!store.indexNames.contains('ageIndex'))
    // creating index using .createIndex()
    store.createIndex('ageIndex','age', {unique: false})

}

request.onsuccess = (e) => {
    list.innerHTML = `index created to again create, change the version`
}
