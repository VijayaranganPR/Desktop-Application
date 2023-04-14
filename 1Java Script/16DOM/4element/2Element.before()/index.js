/*
The Element.before() method inserts a set of Node or string objects in the children list of this Element's parent, just before this Element. 
String objects are inserted as equivalent Text nodes.
*/


const div = document.getElementById('div')
console.log(document.body.childNodes)     // NodeList(4) [text, div#div, text, script]


// adding element before element
const p = document.createElement('p')
p.textContent = 'some text in p'

div.before(p)
console.log(document.body.childNodes)     // NodeList(5) [text, p, div#div, text, script]

// adding text before element
div.before('text in div')       
console.log(document.body.childNodes)     // NodeList(6) [text, p, text, div#div, text, script]


// adding both element and text
const newP = document.createElement('p')
newP.textContent = 'some text in p'
div.before(', appending extra text', newP)
console.log(document.body.childNodes)       // NodeList(8) [text, p, text, text, p, div#div, text, script]