/*
The transaction method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, 
which you can use to access your object store.

it takes three parameters
    - [storeNames]
    - mode  (readwrite, readonly, versionchange)
    - options   ("default", "strict", or "relaxed")
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',6)

request.addEventListener('upgradeneeded', (e) => {
    db = request.result
    
    if(!db.objectStoreNames.contains('newObjectStore')){
        db.createObjectStore('newObjectStore',{keyPath: 'id'})
        list.innerHTML += `<li>Object store created</li>`;          // older version number 
    }

})
request.addEventListener('success', (e) => {
    const person = {name: 'vijayarangan', age: 21, country: 'India', id: Date.now()}
    
    db = request.result

    list.innerHTML += `<li>Transaction created</li>`;          
    const tx = db.transaction(['newObjectStore'], 'readwrite')
    const store = tx.objectStore('newObjectStore')
    store.add(person)
})
