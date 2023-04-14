/*
new things:
1) createObjectStore
2) creating keyPath
3) checking for previous occurance of objectStore with same name
(!db.objectStoreNames.contains('objectStore name'))
*/

let db;
let objectStore;
// first try with default.
// try upgrading the version.
// try passing lower version.
let DBOpenReq = indexedDB.open('FirstDatabase', 4) // default 1

DBOpenReq.addEventListener('error', (e) => {
    // error occurred while trying to open DB
    // common error: new version number is less than old version number
    console.log(e.target.error.message);
})

DBOpenReq.onupgradeneeded = (e) => {
    console.log('version changed from ' + e.oldVersion + ' to ' + e.newVersion)
    // first time opening this DB
    // OR a new version was passed into open()
    db = e.target.result;
    console.log('on upgrade: ' + db);
    if (!db.objectStoreNames.contains('firstObjectStore')) {
        objectStore = db.createObjectStore('firstObjectStore', {
            // the keyPath will be inside each object.
            // this will be unique for each object.
            keyPath: 'id',
        })
    }
}

DBOpenReq.onsuccess = (e) => {
    // DB has been opened... after upgradeneeded 
    db = e.target.result;
    console.log('on success: ' + db);
}
