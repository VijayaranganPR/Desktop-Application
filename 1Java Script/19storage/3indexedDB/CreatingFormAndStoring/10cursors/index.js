/*
for creating cursor
    - first create index
    - second create range

then reqest index to open cursor using
    - let getCursorRequest = index.openCursor(range, 'next')
    - getCursorRequest.onsuccess to execute the cursor
    - get the cursor using e.target.result

to continue with the next element use
    - cursor.continue()
*/
import {testData} from './testData.js';

// creating DB
let db;
let objectStore;
let DBOpenReq = indexedDB.open('FirstDatabase', 5) // default 1


// do thing when a error in opening  
DBOpenReq.addEventListener('error', (e) => {
    console.log(e.target.error.message);
})


// do things when incresing the version
DBOpenReq.onupgradeneeded = (e) => {
    console.log('version changed from ' + e.oldVersion + ' to ' + e.newVersion)
    db = e.target.result;
    console.log('on upgrade: ' + db);
    if (db.objectStoreNames.contains('firstObjectStore')) {

        // deleting object previous object store
        db.deleteObjectStore('firstObjectStore')
    }
        // creating new object store
        objectStore = db.createObjectStore('firstObjectStore', {
            keyPath: 'id',
        })
        objectStore.createIndex('nameIndex', 'name',{unique: false})
        objectStore.createIndex('ageIndex', 'age',{unique: false})
}


// do things when open request succeed
DBOpenReq.onsuccess = (e) => {
    db = e.target.result;
    console.log('on success: ' + db);

    let tx = makeTX('firstObjectStore','readwrite')
    let store = tx.objectStore('firstObjectStore')

    // clearing all previous elements stored in objectStore
    store.clear()

    // adding elements from test data
    for (let i of testData){
        store.add(i)
    }

    // if successfully access the database means create list
    makeList()
}




// getting buttons
const addButton = document.getElementById('btnAdd')
const updateButton = document.getElementById('btnUpdate')
const deleteButton = document.getElementById('btnDelete')

// for clearing the form
document.getElementById('btnClear').addEventListener('click', clearForm);






// adding functionality to add Person button
addButton.addEventListener('click', (e) => {
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


// adding functionality to update person button
updateButton.addEventListener('click', (e) => {
    e.preventDefault() // to stop reloading the page after pressing the button

    // getting the value to update
    let name = document.getElementById('name').value.trim();
    let country = document.getElementById('country').value.trim();
    let age = parseInt(document.getElementById('age').value);
    let isOwned = document.getElementById('isOwned').checked;


    
    let idValue = document.getElementsByName('personForm')[0].id        // getting id
    const tx = makeTX('firstObjectStore', 'readwrite');         // creating transaction
    const store = makeStore(tx,'firstObjectStore');         // creating store
    
    // storing values in a object
    let person = {
        id: idValue,
        name,
        country,
        age,
        isOwned
    }

    let request = store.put(person)     // you don't need to store the 
    makeList()
    clearForm(e)
})


// adding functionality to delete person button
deleteButton.onclick = (e) => {
    e.preventDefault() // to stop reloading the page after pressing the button

    let idValue = document.getElementsByName('personForm')[0].id
    const tx = makeTX('firstObjectStore', 'readwrite')
    const store = makeStore(tx, 'firstObjectStore')

    store.delete(idValue)
    makeList()
    clearForm()

}




// making a list for item present in database
function makeList() {
    const ol = document.getElementById('ol')

    const tx = makeTX('firstObjectStore', 'readonly')
    const store = makeStore(tx, 'firstObjectStore')

    // geting data from the objectStore above 26
    // const getStoreRequest = store.getAll()


    // getting index
    const index = store.index('ageIndex')

    // creating range
    const range = IDBKeyRange.lowerBound(26,false)

    // changing list using innerHtml
    ol.innerHTML = '';

    // opening cursor in index using index.openCursor
    // direction - next, nextunique, prev, prevunique
    let getCursorRequest = index.openCursor(range, 'next')
    
    getCursorRequest.onsuccess = (e) => {
        // creating a using e.target.result
        const cursor = e.target.result;

        // if else for monitoring cursor end
        if (cursor){
            // printing result for checking values
            console.log(
                cursor.source.objectStore.name,     // objectStore name
                cursor.source.name,                 // index name
                cursor.direction,                   // direction diclared
                cursor.key,                         // primary key used for this index
                cursor.primaryKey                   // primary key used for the object store
            );

            // in the cursor.value we can see the object
            let person = cursor.value;
            ol.innerHTML += `<li id = "${person.id}">name: ${person.name} age: ${person.age} country: ${person.country} isOwned: ${person.isOwned}</span></li>`

            // without cursor.continue() the cursor will stop at first occurence
            cursor.continue();  // call onsuccess
        }
        else{
            console.log('end of cursor')
        }

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

// for generating random id.
const generateRandomID = () => {
    let first = Date.now().toString(36).toLocaleUpperCase();
    let last = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    last = last.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    return ''.concat(first, '-', last)
}



// if we press the list element we can see the content in console and text box.
const ol = document.getElementById('ol')
ol.addEventListener('click', (e) => {
    const tx = makeTX('firstObjectStore', 'readonly')
    const store = makeStore(tx, 'firstObjectStore')
    const getStoreRequest = store.get(e.target.id)
    getStoreRequest.onsuccess = (e) => {
        console.log(e.target.result)
        document.getElementById('name').value = e.target.result.name
        document.getElementById('age').value = e.target.result.age
        document.getElementById('country').value = e.target.result.country
        document.getElementById('isOwned').checked = e.target.result.isOwned
        document.getElementsByName('personForm')[0].id = e.target.result.id
        
    }
})

