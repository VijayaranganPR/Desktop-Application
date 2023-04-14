/*
The oldVersion read-only property of the IDBVersionChangeEvent interface returns the old version number of the database.

When the opened database doesn't exist yet, the value of oldVersion is 0.
*/

let db;
const list = document.getElementById('list')
const request = indexedDB.open('newDataBase',8)

request.addEventListener('upgradeneeded', (e) => {
    list.innerHTML += `<li>older version number is ${e.oldVersion}</li>`;          // older version number 
})
request.addEventListener('success', (e) => {
    list.innerHTML += `<li>change the version number to see the update</li>`;          // older version number 
})