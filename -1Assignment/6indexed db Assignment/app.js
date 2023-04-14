console.log('one')

const request = indexedDB.open(`NewDatabase}`, 1)
request.onerror = (err) => {
    throw err
}

request.onupgradeneeded = (e) => {
    const db = request.result

    if (!db.objectStoreNames.contains('NewObjectStore'))
        db.createObjectStore('NewObjectStore', {
            keyPath: 'id'
        })
}

request.onsuccess = (e) => {
    const db = request.result

    const tx = db.transaction('NewObjectStore', 'readwrite')
    tx.onerror = (err) => {
        throw err
    }
    tx.oncomplete = (e) => console.log('transaction completed')

    const store = tx.objectStore('NewObjectStore')

    const person = {
        name: 'Vijayarangan',
        age: 21,
        gender: 'Male',
        id: Date.now()
    }
    const key = person.id

    const storeRequest = store.add(person)
    storeRequest.onerror = (err) => {
        throw err
    }
    storeRequest.onsuccess = (e) => {
        console.log('successfully added')
    }



    setTimeout(() => {
        const tx = db.transaction('NewObjectStore', 'readwrite')
        tx.onerror = (err) => {
            throw err
        }
        tx.oncomplete = (e) => console.log('transaction completed')

        const store = tx.objectStore('NewObjectStore')

        const storeRequest = store.delete(key)
        storeRequest.onerror = (err) => {
            throw err
        }
        storeRequest.onsuccess = (e) => console.log('successfully deleted')
    }, 15000);
}