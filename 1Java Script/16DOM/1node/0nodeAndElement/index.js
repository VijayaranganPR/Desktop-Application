/*
// for all nodes:
childNodes – nodes that are direct child. In other words, they are nested exactly in the given one. 
parentNode – descendant node of the given node
firstChild - returns the first child node
lastChild - returns the last child node
previousSibling - returns the previous Sibling node
nextSibling - returns the next Sibling node
*/

console.log(document.body.childNodes)   // NodeList(10) [text, p, text, p, text, p, text, comment, text, script]

console.log(document.body.parentNode)   // <html>...</html>

console.log(document.body.firstChild)   // #text

console.log(document.body.lastChild)    // <script src="index.js"></script>

console.log(document.body.previousSibling)  // #text

console.log(document.head.nextSibling)  // #text


/*
// for all Elements:
children – elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
parentElement – descendant element of the given element
firstElementChild - returns the first child element
lastChild - returns the last child element
previousSibling - returns the previous Sibling element
nextSibling - returns the next Sibling element
*/

console.log(document.body.children)         // HTMLCollection(4) [p, p, p, script]

console.log(document.body.parentElement)    // <html>...</html>

console.log(document.body.firstElementChild)   // <p>one</p>

console.log(document.body.lastElementChild)   // <script src="index.js"></script>

console.log(document.body.previousElementSibling)   // <html>...</html>

console.log(document.head.nextElementSibling)   // <body>...</body>




// DOM collections
// 1) DOM collections are read-only
// 2) DOM collections are live
// 
// childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.

// 1)  we can iterate over it
for(let i of document.body.childNodes){
    console.log(i.textContent)
}
/*
one
two
three

*/

// 2) array methods won't work except (foreach, keys, values, entries, length, item)
// console.log(document.body.childNodes.filter())       // error

// 2.1 alternatively 
console.log(Array.from(document.body.childNodes).filter((x) => x === x))       // [p, p, p, script]



