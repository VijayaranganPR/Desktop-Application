inputElement = document.getElementById('input-id')


// Property-attribute synchronization - standard property - works in both way
console.log(inputElement.getAttribute('id'))        // input-id
// attribute => property
inputElement.setAttribute('id','newID')
console.log(inputElement.id)                        // newID
// property => attribute
inputElement.id = 'backToInput-ID'
console.log(inputElement.getAttribute('id'))        // backToInput-ID



// Property-attribute synchronization - non - standard property 
console.log(inputElement.getAttribute('value'))     // null
// attribute => non - property
inputElement.setAttribute('value', 'newValue')
console.log(inputElement.value)                     // newValue
// non - property => attribute-- won't work - but affect the web
inputElement.value = 'changesWontaffect'
console.log(inputElement.getAttribute('value'))     // newValue
console.log(inputElement.value)                     // changesWontaffect


// data-*   Non-standard attributes, dataset
const element1 = document.getElementById('one')
console.log(element1.dataset.firstp)        // value inside data1
element1.dataset.firstp = 'newChangedValue'
console.log(element1.getAttribute('data-firstP'))        // newChangedValue



// DOM properties are typed
/*
DOM properties are not always strings. For instance, the input.checked property (for checkboxes) is a boolean:
*/

// checked
console.log(inputElement.getAttribute('checked'))       // '' -- empty string
console.log(inputElement.checked)      // true


// style
console.log(inputElement.getAttribute('style'))       // null
console.log(inputElement.style)      // object


// href
img = document.getElementById('img')
console.log(img.getAttribute('src'))       // download.jpg
console.log(img.src)      // http://127.0.0.1:5500/download.jpg

