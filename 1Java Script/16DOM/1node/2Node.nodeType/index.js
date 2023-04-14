/*
The nodeType property provides one more, “old-fashioned” way to get the “type” of a DOM node.

read only
*/

const elem = document.body
console.log(elem.nodeType == 1);      // for element nodes,
console.log()
console.log(elem.firstChild.nodeType == 3);      // for text nodes,
console.log(document.nodeType == 9);      // for the document object,