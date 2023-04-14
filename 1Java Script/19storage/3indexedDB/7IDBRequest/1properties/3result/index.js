/*
The result read-only property of the IDBRequest interface returns the result of the request. 
If the request is not completed, the result is not available and an InvalidStateError exception is thrown.
*/

const list = document.getElementById('list')
let db;

const request = indexedDB.open('newDataBase', 4)
// list.innerHTML += `<li>opeing database request ${request.result}</li>`      // Error

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
        list.innerHTML += `<li>adding object to store request ${storeRequest.result}</li>`  // returns key path
    }
}
