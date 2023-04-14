/*
The Element.replaceWith() method replaces this Element in the children list of its parent with a set of Node or string objects. 
String objects are inserted as equivalent Text nodes.
*/


const div = document.getElementById('div')
console.log(document.body.childNodes)     // NodeList(4) [text, div#div, text, script]


// replacing element after element
const p = document.createElement('p')
p.textContent = 'some text in p'

div.replaceWith(p)
console.log(document.body.childNodes)     // NodeList(4) [text, p, text, script]

// replacing text after element
p.replaceWith('replacing text')       
console.log(document.body.childNodes)     // NodeList(4) [text, text, text, script]

// replacing  with element and text
const newP = document.createElement('p')
newP.textContent = 'some text in p'
document.body.firstChild.replaceWith(', appending extra text', newP)
console.log(document.body.childNodes)       // NodeList(5) [text, p, text, text, script]