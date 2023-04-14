/*
The delete() method of the FormData interface deletes a key and its value(s) from a FormData object.
*/
const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.has('textName1'))      // true
formData.delete('textName1')
console.log(formData.has('textName1'))      // false

console.log(formData.has('textName2'))      // true
formData.delete('textName2')
console.log(formData.has('textName2'))      // false

console.log(formData.has('textName3'))      // true
formData.delete('textName3')
console.log(formData.has('textName3'))      // false


// appending new field
formData.append('newtext',30)
console.log(formData.has('newtext'))    // true

// appending same field - will be added as new field does not override
formData.append('newtext',100)
console.log(formData.has('newtext'))    // true

// deleting field
formData.delete('newtext')
console.log(formData.has('newtext'))    // false


// checking for invalid data
formData.delete('invalidText')      // no error


// checking entries
for(let i of formData.entries()){
    console.log(i)
}
/*
*/
