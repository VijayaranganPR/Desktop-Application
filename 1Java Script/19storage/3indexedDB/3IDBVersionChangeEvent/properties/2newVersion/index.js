/*
The newVersion read-only property of the IDBVersionChangeEvent interface returns the new version number of the database.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',9)

request.addEventListener('upgradeneeded', (e) => {
    list.innerHTML += `<li>New version number is ${e.newVersion}</li>`;          // older version number 
})
request.addEventListener('success', (e) => {
    list.innerHTML += `<li>change the version number to see the update</li>`;          // older version number 
})