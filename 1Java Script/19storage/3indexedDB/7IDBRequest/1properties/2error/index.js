/*
The error read-only property of the IDBRequest interface returns the error in the event of an unsuccessful request.

error can occur because of:
    - AbortError
    - ConstraintError
    - QuotaExceededError
    - UnknownError
    - VersionError
*/

const list = document.getElementById('list')
let db;

const request = indexedDB.open('newDataBase', 2)
list.innerHTML += `<li>opeing database request ${request.readyState}</li>`      // pending

request.onerror = (err) => {
    list.innerHTML += `<li>error opeing database request ${request.error}</li>`  // .error retuns error message [VersionError]
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
    list.innerHTML += `<li>opeing database request ${request.readyState}</li>`  // done
    afterSuccess()
}

function afterSuccess(){
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id:Date.now()} 
    
    const tx = db.transaction(['newObjectStore'], 'readwrite')        // tx don't have .readyState
    const store = tx.objectStore('newObjectStore')
    const storeRequest = store.add(person)

    storeRequest.onerror = (err) => {
        list.innerHTML += `<li>error creating object store ${e.error}</li>`  // .error retuns error message 
    } 

    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>adding object to store request ${storeRequest.readyState}</li>`  // done
    }
}
