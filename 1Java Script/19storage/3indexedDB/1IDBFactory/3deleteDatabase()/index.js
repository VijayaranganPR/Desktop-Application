/*
The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. 
The method returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously.

it has two parametes
    - name = the name of the database 
    - options (need to learn) = whether you want to delete a permanent (the default value) IndexedDB, or an indexedDB in temporary storage (aka shared pool.)
*/

const list = document.getElementById('list')

// const request = indexedDB.open('database',3)
// request.onerror = (e) => {
//     console.log(1)
//     list.innerHTML += `<li>Error message while creating: ${e.target.error.message}</li>`
// }

// request.onsuccess = (e) => {
//     console.log(2)
//     list.innerHTML += `<li>successfully created</li>`
// }


const deleteRequest = indexedDB.deleteDatabase('database')
deleteRequest.onerror = (e) => {
    console.log(3)
    list.innerHTML += `<li>Error message while deleting: ${e.target.error.message}</li>`
}
deleteRequest.onsuccess = (e) => {
    console.log(4)
    list.innerHTML += `<li>successfully removed</li>`
}
