/*
new things:
deleting the creted object store

*/

let db;
let objectStore;
let DBOpenReq = indexedDB.open('FirstDatabase',5) // default 1

DBOpenReq.addEventListener('error', (e) => {
    console.log(e.target.error.message);
})



DBOpenReq.onupgradeneeded = (e) => {
    console.log('version changed from ' + e.oldVersion + ' to ' + e.newVersion)
    db = e.target.result;
    console.log('on upgrade: ' + db);

    // run creating object store first to create the object store or uncommend the below
    /*   
      if(!db.objectStoreNames.contains('firstObjectStore')){
        objectStore = db.createObjectStore('firstObjectStore',{
          keyPath: 'id',
        })
    } 
    */
    if (db.objectStoreNames.contains('firstObjectStore')){
        db.deleteObjectStore('firstObjectStore')
    }
}



DBOpenReq.onsuccess = (e) => {
    db = e.target.result;
    console.log('on success: ' + db);
}