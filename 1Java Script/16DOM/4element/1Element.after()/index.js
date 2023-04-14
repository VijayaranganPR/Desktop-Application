/*
The Element.after() method inserts a set of Node or string objects in the children list of the Element's parent, just after the Element. 
String objects are inserted as equivalent Text nodes.
*/


const div = document.getElementById('div')
console.log(document.body.childNodes)     // NodeList(4) [text, div#div, text, script]


// adding element after element
const p = document.createElement('p')
p.textContent = 'some text in p'

div.after(p)
console.log(document.body.childNodes)     // NodeList(5) [text, div#div, p, text, script]

// adding text after element
div.after('text in div')       
console.log(document.body.childNodes)     // NodeList(6) [text, div#div, text, p, text, script]


// adding both element and text
const newP = document.createElement('p')
newP.textContent = 'some text in p'
div.after(', appending extra text', newP)
console.log(document.body.childNodes)       // NodeList(8) [text, div#div, text, p, text, p, text, script]
