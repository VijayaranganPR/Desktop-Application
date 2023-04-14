/*
The open() method of the IDBFactory interface requests opening a connection to a database.

if there is no database exist at that name then it will create a new database

it has 2 parameters,
    - name of the database 
    - version of the database (by default 1)

it has 3 events
    - on error = when new version number is less than older
    - on upgradeneeded = execute when we change the version and creating the database
    - on success = executes after upgradeneeded.
*/

const list = document.getElementById('ol')

// you can also call with just indexedDB.open()
const request = window.indexedDB.open('firstDatabase',4)

// executes when there is a error
request.onerror = (e) => {
    console.log(e)
    list.innerHTML += `<li>Error message: ${e.target.error.message}</li>`
}

// execute once the database is created and when changing the version
request.onupgradeneeded = (e) => {
    console.log('hi')
    list.innerHTML += `<li>data base upgraded</li>`
}

// executes each time opening the database
request.onsuccess = (e) => {
    list.innerHTML += `<li>data base successfully opened</li>`
}