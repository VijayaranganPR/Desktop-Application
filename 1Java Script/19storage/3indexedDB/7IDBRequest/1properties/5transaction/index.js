/*
The source read-only property of the IDBRequest interface returns the source of the request, such as an Index or an object store. 
If no source exists (such as when calling IDBFactory.open), it returns null.
*/

const list = document.getElementById('list')
let db;

const request = indexedDB.open('newDataBase', 7)
list.innerHTML += `<li>opeing database request ${request.transaction}</li>`      // null

request.onerror = (err) => {
    list.innerHTML += `<li>error opening database request ${request.error}</li>`  // .error retuns error message [VersionError]
}

request.onupgradeneeded = (e) => {
    db = e.target.result

    if(!db.objectStoreNames.contains('newObjectStore')){
        store = db.createObjectStore('newObjectStore', {
            keyPath: 'id'
        })
    }
}

request.onsuccess = (e) => {
    db = e.target.result
    afterSuccess()
}

function afterSuccess(){
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id:Date.now()} 
    
    const tx = db.transaction(['newObjectStore'], 'readwrite')

    const store = tx.objectStore('newObjectStore')
    const storeRequest = store.add(person)

    storeRequest.onerror = (err) => {
        list.innerHTML += `<li>error creating object store ${e.error}</li>`  // .error retuns error message 
    } 

    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>adding object to store request ${storeRequest.transaction}</li>`  // returns [object IDBTransaction]
        console.log(storeRequest.transaction)        // IDBTransaction {objectStoreNames: DOMStringList, mode: 'readwrite', durability: 'default', db: IDBDatabase, error: null, …}
    }
}
