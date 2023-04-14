/*
here we are trying to open an database with higher version which is blocked
*/

let db;
const list = document.getElementById('list')

const request = indexedDB.open('newDataBase',2)

request.onerror = (e) => {
}

request.onupgradeneeded = (e) => {
}
request.onsuccess = (e) => {
    const request2 = indexedDB.open('newDataBase', 3)
    request2.onblocked = (e) => {
        list.innerHTML = `<li>Database access blocked ${request2}</li>`
    }
}
