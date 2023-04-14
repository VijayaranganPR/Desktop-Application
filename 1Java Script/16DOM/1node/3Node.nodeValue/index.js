let node = document.getElementsByTagName('body')[0].firstChild
while (node) {
    console.dir(node.nodeValue) // prints the node name until it reaches null
    node = node.nextSibling
}
/*
example commend
    just simple text inside body
null

null

null

null

null

null
*/

