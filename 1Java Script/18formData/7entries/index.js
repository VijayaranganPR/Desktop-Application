/*
The FormData.entries() method returns an iterator which iterates through all key/value pairs contained in the FormData. 
The key of each pair is a string object, and the value is either a string or a Blob.
*/

const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.get('textName1'))      // vijay
console.log(formData.get('textName2'))      // sakthi
console.log(formData.get('textName3'))      // shanu

// checking entries
for(let i of formData.entries()){
    console.log(i)
}
/*
['textName1', 'vijay']
['textName2', 'sakthi']
['textName3', 'shanu']
*/



// appending new field
formData.append('newtext',30)
formData.append('newtext',100)

// checking entries
for(let i of formData.entries()){
    console.log(i)
}
/*
['textName1', 'vijay']
['textName2', 'sakthi']
['textName3', 'shanu']
['newtext', '30']
['newtext', '100']
*/
