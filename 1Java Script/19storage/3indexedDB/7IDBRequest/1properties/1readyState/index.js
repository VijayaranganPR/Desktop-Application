/*
The readyState read-only property of the IDBRequest interface returns the state of the request.

Every request starts in the pending state. 
The state changes to done when the request completes successfully or when an error occurs.
*/

const list = document.getElementById('list')
let db;

const request = indexedDB.open('newDataBase', 5)
list.innerHTML += `<li>opeing database request ${request.readyState}</li>`      // pending

request.onerror = (err) => {
    console.log(err.target.error.message)
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
        list.innerHTML += `<li>adding object to store request ${storeRequest.readyState}</li>`  // done
    } 

    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>adding object to store request ${storeRequest.readyState}</li>`  // done
        console.log(e.target === storeRequest)
    }
}
