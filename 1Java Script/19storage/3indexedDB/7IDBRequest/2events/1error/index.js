/*
The error handler is executed when an error caused a request to fail.
This event will bubble
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
    const person = {name: 'Vijayarangan', age: 21, country: 'India', id:1}
    
    const tx = db.transaction('newObjectStore', 'readwrite')
    const store = tx.objectStore('newObjectStore')
    const storeRequest = store.add(person)

    // run two time to make this error occur
    storeRequest.onerror = (e) => {
        list.innerHTML += `<li>Error occured: ${storeRequest.error}</li>`   // ConstraintError: Key already exists in the object store. 
    }
    storeRequest.onsuccess = (e) => {
        list.innerHTML += `<li>Successfully added: ${storeRequest.result}</li>`
    }
}
