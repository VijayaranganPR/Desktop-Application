/*
The success event is fired when an IDBRequest succeeds.

This event is not cancelable and does not bubble.
*/

let db;
const list = document.getElementById('list')

const request = indexedDB.open('newDataBase',2)

request.onerror = (e) => {
    list.innerHTML += `<li>Error occured while opening: ${request.error.message}</li>`
}

request.onupgradeneeded = (e) => {
    db = request.result

    if(!db.objectStoreNames.contains(''))
    db.createObjectStore('newObjectStore', {keyPath: 'id'})
    list.innerHTML += `<li>successfully opened: ${request.result}</li>`
}
request.onsuccess = (e) => {
    db = request.result
    list.innerHTML += `<li>successfully opened: ${request.result}</li>`
    afterSuccess()
}

function afterSuccess(){
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id:Date.now()}
    
    const tx = db.transaction('newObjectStore', 'readwrite')
    const store = tx.objectStore('newObjectStore')
    const storeRequest = store.add(person)

    storeRequest.onerror = (e) => {
        list.innerHTML += `<li>Error occured: ${storeRequest.error}</li>`   // ConstraintError: Key already exists in the object store. 
    }

    // object will be added successfully
    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Object successfully added</li>`
    }
}
