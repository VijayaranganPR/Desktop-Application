const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.get('textName1'))      // vijay
console.log(formData.get('textName2'))      // sakthi
console.log(formData.get('textName3'))      // shanu


// appending new field
formData.append('newtext',30)
console.log(formData.get('newtext'))    // 30


// appending same field - will be added as new field does not override
// only the first value will be returneds
formData.append('newtext',100)
console.log(formData.get('newtext'))    // 30


// checking for invalid data - retuns null
console.log(formData.get('invalidText'))    // null 

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