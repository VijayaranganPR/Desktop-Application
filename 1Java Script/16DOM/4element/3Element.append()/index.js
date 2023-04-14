/*
The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.

Differences from Node.appendChild():

Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
*/

const div = document.getElementById('div')


// appending element
const p = document.createElement('p')
p.textContent = 'some text in p'

div.append(p)
console.log(div.childNodes)     // NodeList [p]

// appending text
div.append('text in div')       // text will be appended
console.log(div.childNodes)     // NodeList(2) [p, text]


// appending both element and text
const newP = document.createElement('p')
newP.textContent = 'some text in p'
div.append(', appending extra text', newP)
console.log(div.childNodes)     // NodeList(4) [p, text, text, p]
