/*
The FormData.values() method returns an iterator which iterates through all values contained in the FormData. 
The values are strings or Blob objects.
*/

const form = document.getElementById('form')

const formData = new FormData(form)
console.log(formData)       // FormData {}

console.log(formData.get('textName1'))      // vijay
console.log(formData.get('textName2'))      // sakthi
console.log(formData.get('textName3'))      // shanu

// checking values
for(let i of formData.values()){
    console.log(i)
}
/*
vijay
sakthi
shanu
*/



// appending new field
formData.append('newtext',30)
formData.append('newtext',100)

// checking values
for(let i of formData.values()){
    console.log(i)
}
/*
vijay
sakthi
shanu
30
100
*/
