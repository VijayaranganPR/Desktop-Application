/*
The FormData.keys() method returns an iterator which iterates through all keys contained in the FormData. 
The keys are strings.
*/

const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.get('textName1'))      // vijay
console.log(formData.get('textName2'))      // sakthi
console.log(formData.get('textName3'))      // shanu

// checking keys
for(let i of formData.keys()){
    console.log(i)
}
/*
textName1
textName2
textName3
*/



// appending new field
formData.append('newtext',30)
formData.append('newtext',100)

// checking keys
for(let i of formData.keys()){
    console.log(i)
}
/*
textName1
textName2
textName3
newtext
newtext
*/


