/* In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them.
So when an element has id or another standard attribute, the corresponding property gets created. But that doesn’t happen if the attribute is non-standard.
*/

// standard attribute does yield a property
console.log(document.body.id) // name

// non-standard attribute does not yield a property
console.log(document.body.something) // undefined
/*
So, if an attribute is non-standard, there won’t be a DOM-property for it. 
Is there a way to access such attributes?    yes
*/

console.log(document.body.getAttribute('something')) // this is something will be undefined


// getAttribute 
// getAttribute is case-insensitive
const inputElement = document.getElementById('input-id')
console.log(inputElement.getAttribute('TYPE'))      // text
console.log(inputElement.getAttribute('Name'))      // input-name
console.log(inputElement.getAttribute('ID'))      // input-id
console.log(inputElement.getAttribute('userDefinedAttribute'))      // userValue


