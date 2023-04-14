/*
The close() method of the IDBDatabase interface returns immediately and closes the connection in a separate thread.

The connection is not actually closed until all transactions created using this connection are complete. 
No new transactions can be created for this connection once this method is called. 
Methods that create transactions throw an exception if a closing operation is pending.
*/

let db;
const list = document.getElementById('list')
// Let us open our database
const request = window.indexedDB.open("newDatabase", 4); // opening a database.

// Create event handlers for both success and failure of
request.onerror = (event) => {
    list.innerHTML += "<li>Error loading database.</li>";
};

request.onsuccess = (event) => {
    list.innerHTML += "<li>Database initialized.</li>";

    // store the result of opening the database in the db variable.
    db = request.result;

    // now let's close the database again!
    db.close();
    // db.createObjectStore('one',{keyPath: 'hi'})    // will throw error - database closed
};