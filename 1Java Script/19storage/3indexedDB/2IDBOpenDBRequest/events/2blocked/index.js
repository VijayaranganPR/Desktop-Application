/*
The onblocked handler in IndexedDB is executed when an operation is blocked due to the maximum number of connections to a database being reached. T
his typically occurs when there are too many open connections or transactions to a database, and the browser is unable to open a new one. 
When this happens, the onblocked handler is called, allowing the developer to take appropriate action, 
such as closing unnecessary connections or prompting the user to try again later.
*/

let db;
var request = indexedDB.open("myDatabase");

// Handle the blocked event
request.onblocked = function(event) {
  alert("The database is blocked, please close other tabs or windows that are using this app.");
};

request.onsuccess = function(event) {
  // Do something with the database
  var db = event.target.result;
  //...
};

request.onerror = function(event) {
  // Handle the error
};
