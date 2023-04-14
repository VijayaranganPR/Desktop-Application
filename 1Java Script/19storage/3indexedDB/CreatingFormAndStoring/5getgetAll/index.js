/*
1) here we tried to get all the items form the objectStore using "getAll" and listed in ordered list.
    - we created makeTX and makeStore function to minimize the code.
    - we created clear form function to clear the form after finish and pressing clear form.
    - we created makeList function to change the innerHTML of ordered list and display items in the data base.
2) here we also tried to get a single item from the objectStore using "get" and printed it's content in the console.
    - we added event only for the ol by event delecation the event will be added to all the child inside
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
    // if successfully access the database means create list
    makeList()
}


// after submitting the form
document.personForm.addEventListener('submit', (e) => {
    e.preventDefault() // to stop reloading the page after pressing the button
    

    // getting the values from the form - use the right name this will be stored as key in object.
    let name = document.getElementById('name').value.trim();
    let country = document.getElementById('country').value.trim();
    let age = parseInt(document.getElementById('age').value);
    let isOwned = document.getElementById('isOwned').checked;

    // for clearing the form
    document.getElementById('btnClear').addEventListener('click', clearForm);


    // creating object to store the values from the form.
    let person = {
        id: generateRandomID(),
        name,
        country,
        age,
        isOwned
    }


    // making transaction and checking error
    let tx = makeTX('firstObjectStore', 'readwrite')

    // getting the object store to add values
    let store = makeStore(tx, 'firstObjectStore');

    // adding object to the store
    let request = store.add(person);


    // listing all the elements
    makeList()

    // clearing form after submitting
    clearForm()
})

// making a list for item present in database
function makeList() {
    const ol = document.getElementById('ol')

    const tx = makeTX('firstObjectStore', 'readonly')
    const store = makeStore(tx, 'firstObjectStore')
    const getStoreRequest = store.getAll()
    getStoreRequest.onsuccess = (e) => {
        ol.innerHTML = e.target.result.map(x => `<li id = "${x.id}">name: ${x.name} age: ${x.age} country: ${x.country} isOwned: ${x.isOwned}</span></li>`).join('\n')
    }
}

// creating to function to make transaction eachtime
function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode)
    tx.onerror = (err) => {
        console.log(err)
    }
    return tx
}

// creating to function to get the store eachtime
function makeStore(tx, storename) {
    let store = tx.objectStore(storename)
    store.onerror = (err) => {
        console.log(err)
    }
    return store
}

// for clearing the form
function clearForm(ev) {
    if (ev) ev.preventDefault();
    document.personForm.reset();
}


// if we press the list element we can see the content in console.
const ol = document.getElementById('ol')
ol.addEventListener('click',(e) => {
    const tx = makeTX('firstObjectStore', 'readonly')
    const store = makeStore(tx, 'firstObjectStore')
    const getStoreRequest = store.get(e.target.id)
    getStoreRequest.onsuccess = (e) => {
        console.log(e.target.result)
        document.getElementById('name').value = e.target.result.name
        document.getElementById('age').value = e.target.result.age
        document.getElementById('country').value = e.target.result.country
        document.getElementById('isOwned').checked = e.target.result.isOwned
    }
})

// for generating random id.
const generateRandomID = () => {
    let first = Date.now().toString(36).toLocaleUpperCase();
    let last = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    last = last.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    return ''.concat(first, '-', last)
}