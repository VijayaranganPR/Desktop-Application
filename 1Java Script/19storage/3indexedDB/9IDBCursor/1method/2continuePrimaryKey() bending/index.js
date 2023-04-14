var request = indexedDB.open("myDatabase", 2);

request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Create an object store
  var objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
  // Create an index on the age property
  objectStore.createIndex("age", "age", { unique: false });
  // Add some data to the object store
  objectStore.add({ id: 1, name: "John", age: 25 });
  objectStore.add({ id: 2, name: "Jane", age: 30 });
  objectStore.add({ id: 3, name: "Bob", age: 35 });
};

request.onsuccess = function(event) {
  var db = event.target.result;

  // Open an object store
  var objectStore = db.transaction("myObjectStore").objectStore("myObjectStore");
  var ageIndex = objectStore.index("age");

  var cursor = ageIndex.openCursor();
  cursor.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.value);
      cursor.continuePrimaryKey(cursor.primaryKey+1, 30);
    } else {
      console.log("No more items");
    }
  };
};
