/*
With innerHTML we’ll have it inserted “as HTML”, with all HTML tags.
With textContent we’ll have it inserted “as text”, all symbols are treated literally.
*/
let ele = document.getElementById('h1')
ele.textContent = 'heading with H1 tag'         // content changed


let node = document.getElementsByTagName('body')[0].firstChild
while (node) {
    console.dir(`"${node.nodeName}" has a value of "${node.textContent}"`) // prints the node name until it reaches null
    node = node.nextSibling
}
/*
"#comment" has a value of " example commend "
"#text" has a value of "
    just simple text inside body
    "
"H1" has a value of "heading with H1 tag"
"#text" has a value of "
    "
"HR" has a value of ""
"#text" has a value of "
    "
"BR" has a value of ""
"#text" has a value of "
    "
"DIV" has a value of "div"
"#text" has a value of "
    "
"P" has a value of "paragraph"
"#text" has a value of "
    "
"SCRIPT" has a value of ""
*/

