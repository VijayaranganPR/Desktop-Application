/*
both tagName and nodeName gives same result the difference is 
 tagName is only supported by element nodes (as it originates from Element class), 
 while nodeName can say something about other node types.
*/

let node = document.getElementsByTagName('body')[0].firstChild
while (node) {
    console.dir(node.nodeName) // prints the node name until it reaches null
    node = node.nextSibling
}
/*
#comment
#text
H1
#text
HR
#text
BR
#text
DIV
#text
P
#text
SCRIPT
*/


// difference
// for comment
console.log(document.body.firstChild.tagName); // undefined (not an element)
console.log(document.body.firstChild.nodeName); // #comment

// for document
console.log(document.tagName); // undefined (not an element)
console.log(document.nodeName); // #document
