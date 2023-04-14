// way to bundly data and send it to server.
const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.has('textName1'))      // true
console.log(formData.has('textName2'))      // true
console.log(formData.has('textName3'))      // true


// appending new field
formData.append('newtext',30)
console.log(formData.has('newtext'))    // true


// appending same field - will be added as new field does not override
formData.append('newtext',100)
console.log(formData.has('newtext'))    // true


// checking for invalid data
console.log(formData.has('invalidText'))    // false

// checking entries
for(let i of formData.entries()){
    console.log(i)
}
/*
['textName1', '']
['textName2', '']
['textName3', '']
['newtext', '30']
['newtext', '100']
*/