/*
The durability read-only property of the IDBTransaction interface returns the durability hint the transaction was created with. 
This is a hint to the user agent of whether to prioritize performance or durability when committing the transaction.

The value of this property is defined in the options parameter when creating a transaction using IDBDatabase.transaction().

values can be:
    - strict
    - relaxed
    - default
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

    // durability property
    list.innerHTML += `durability property returns ${tx.durability}`;
    console.log(tx.durability)      // default
}
