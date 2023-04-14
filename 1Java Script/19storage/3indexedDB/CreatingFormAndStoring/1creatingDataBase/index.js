/*
new thing to learn

indexedDB.open(database_name, version)

error event
upgradeneeded event
success event
*/

let db;
// first try with default.
// try upgrading the version.
// try passing lower version.
let DBOpenReq = indexedDB.open('FirstDatabase') // default 1

DBOpenReq.addEventListener('error', (e) => {
    // error occurred while trying to open DB
    // common error: new version number is less than old version number
    console.log(e.target.error.message);
})

DBOpenReq.onupgradeneeded = (e) => {
    // first time opening this DB
    // OR a new version was passed into open()
    db = e.target.result;
    console.log('on upgrade: ' + db);
}

DBOpenReq.onsuccess = (e) => {
    // DB has been opened... after upgradeneeded 
    db = e.target.result;
    console.log('on success: ' + db);
}