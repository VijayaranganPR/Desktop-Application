/*
The mode read-only property of the IDBTransaction interface returns the current mode for accessing the data in the object stores in the scope of the transaction 
(i.e. is the mode to be read-only, or do you want to write to the object stores?) The default value is readonly.


*/

const list = document.getElementById('list')

let db;

const request = indexedDB.open('newDatabase');

request.onerror = (e) => {
    list.innerHTML += `Error occured: ${request.error.message}`
}

request.onupgradeneeded = (e) => {
    db = request.result

    if(!db.objectStoreNames.contains('newObjectStore'))
    db.createObjectStore('newObjectStore',{keyPath: 'id'})
}

request.onsuccess = (e) => {
    db = request.result

    // make transaction
    const tx = db.transaction(['newObjectStore'], 'readwrite')

    // mode property
    list.innerHTML += `mode property returns ${tx.mode}`;
    console.log(tx.mode)      // readwrite
}
