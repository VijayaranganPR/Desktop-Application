/*
The Element.prepend() method inserts a set of Node objects or string objects before the first child of the Element. 
String objects are inserted as equivalent Text nodes.
*/

const div = document.getElementById('div')


// prepending element
const p = document.createElement('p')
p.textContent = 'some text in p'

div.prepend(p)
console.log(div.childNodes)     // NodeList [p]

// prepending text
div.prepend('text in div')       // text will be prepended
console.log(div.childNodes)     // NodeList(2) [text, p]


// prepending both element and text
const newP = document.createElement('p')
newP.textContent = 'some text in p'
div.prepend(', prepending extra text', newP)
console.log(div.childNodes)     // NodeList(4) [text, p, text, p]
