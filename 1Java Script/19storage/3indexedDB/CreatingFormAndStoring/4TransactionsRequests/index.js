/*
1) create a data using open
2) check for onsuccess, onupgradeneeded, onerror
3) do operations like adding object store, etc in onupgradeneeded.
3) get the values 
4) store it in object
5) create a transaction 
6) // optional - check for oncomplete, onerror
7) create a instance for the created object store
9) do operations in like add, get, getall, etc.
8) // optional - check for onsuccess, onerror
*/



// creating DB
let db;
let objectStore;
let DBOpenReq = indexedDB.open('FirstDatabase', 1) // default 1


// do thing when a error in opening  
DBOpenReq.addEventListener('error', (e) => {
    console.log(e.target.error.message);
})


// do things when incresing the version
DBOpenReq.onupgradeneeded = (e) => {
    console.log('version changed from ' + e.oldVersion + ' to ' + e.newVersion)
    db = e.target.result;
    console.log('on upgrade: ' + db);
    if (!db.objectStoreNames.contains('firstObjectStore')) {
        objectStore = db.createObjectStore('firstObjectStore', {
            keyPath: 'id',
        })
    }
}


// do things when open request succeed
DBOpenReq.onsuccess = (e) => {
    db = e.target.result;
    console.log('on success: ' + db);
}



// after submitting the form
document.personForm.addEventListener('submit', (e) => {
    e.preventDefault() // to stop reloading the page after pressing the button

    // getting the values from the form - use the right name this will be stored as key in object.
    let name = document.getElementById('name').value.trim();
    let country = document.getElementById('country').value.trim();
    let age = parseInt(document.getElementById('age').value);
    let isOwned = document.getElementById('isOwned').checked;


    // creating object to store the values from the form.
    let person = {
        id: generateRandomID(),
        name,
        country,
        age,
        isOwned
    }


    // making transaction and checking error
    let tx = db.transaction('firstObjectStore', 'readwrite')

    // operation need to do after complete and if any error occurred
    tx.oncomplete = (e) => {
        console.log(e)
    }
    tx.onerror = (err) => {
        console.log(err.target.error.message)
    }



    // getting the object store to add values
    let store = tx.objectStore('firstObjectStore');

    // adding object to the store
    let request = store.add(person);

    // operation need to do after complete and if any error occurred
    request.onsuccess = (e) => {
        console.log('successfully added on object')
    }
    request.onerror = (err) => {
        console.log('error in request to add')
    }

})

// for generating random id.
const generateRandomID = () => {
    let first = Date.now().toString(36).toLocaleUpperCase();
    let last = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    last = last.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    return ''.concat(first, '-', last)
}