/*
The versionchange event is fired when a database structure change (upgradeneeded event send on an IDBOpenDBRequest or IDBFactory.deleteDatabase)
was requested elsewhere (most probably in another window/tab on the same computer).
*/
let db;
let store;

// Open a connection to the database with a version of 2
let request = indexedDB.open("myDatabase", 3);

// Handle the versionchange event
request.onversionchange = function(event) {
    let db = event.target.result;

    // Check the current version of the database
    if (event.oldVersion < 2) {
        // Upgrade logic goes here
        // For example:
        // Create a new object store
        let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
        // Add new indexes
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("age", "age", { unique: false });
    }
};
