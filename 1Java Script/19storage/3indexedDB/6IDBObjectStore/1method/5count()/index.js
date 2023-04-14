/*
The count() method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, 
returns the total number of records that match the provided key or IDBKeyRange. 

If no arguments are provided, it returns the total number of records in the store.

count()
count(query)
*/

const list = document.getElementById('list')
let db;
const request = indexedDB.open('newDatabase')


request.onerror = (e) => {
    list.innerHTML += `<li>Error Occured while opening the database: ${e.error.message}</li>`
}

request.onupgradeneeded = (e) => {
    db = request.result
    
    if(!db.objectStoreNames.contains('newObjectStore'))
    db.createObjectStore('newObjectStore',{keyPath: 'id'})
}

request.onsuccess = (e) => {
    db = request.result

    // making transaction 
    const tx = db.transaction('newObjectStore', 'readwrite')
    tx.onerror = (e) => {
        list.innerHTML += `<li>Error occured in transaction: ${tx.error}</li>`
    }


    const store = tx.objectStore('newObjectStore')

    // adding object to store
    const person = [{name: 'Vijayarangan', age: 21, country: 'India', id: Date.now()},
                    {name: 'sakthi', age:21, country: "India", id: Date.now()+1000}]

    for (let i of person){
        addStoreRequest = store.add(i)

        addStoreRequest.onsuccess = (e) => {
            list.innerHTML += `<li>Object added to the store successfully</li>`
        }

        addStoreRequest.onerror = (e) => {
            list.innerHTML += `<li>failed to add object to the store: ${e.target.error}</li>`
        }

    }
    

    // getting object from the store using key

    getStoreRequest = store.count()
    getStoreRequest.onsuccess = (e) => {
        list.innerHTML += `<li>the total number of record in store is: ${e.target.result}</li>`
    }

    getStoreRequest.onerror = (e) => {
        list.innerHTML += `<li>failed to count total number of record in store: ${e.target.error}</li>`
    }
}
