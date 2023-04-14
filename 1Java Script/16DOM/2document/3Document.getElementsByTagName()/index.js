// The returned HTMLCollection is live, 
// meaning that it updates itself automatically to stay in sync with the DOM tree 
// without having to call document.getElementsByTagName() again.


// all tags
function allElements(){
    const allEle = document.getElementsByTagName('*')
    console.log(allEle)
}
/*
HTMLCollection(24) 
[html, head, meta, meta, meta, title, script, body, div#div1, p, p, p, div#div2, 
    p, p, p, p, p, button, br, button, br, button, script, viewport: meta, div1: div#div1, div2: div#div2]
*/


// tags only inside div1
function onlyDiv1(){
    const onlyDiv = document.getElementById('div1')
    const insidediv1 = onlyDiv.getElementsByTagName('*')
    console.log(insidediv1)
}
// HTMLCollection(3) [p, p, p]



// tags only inside div2
function onlyDiv2(){
    const onlyDiv = document.getElementById('div2')
    const insidediv2 = onlyDiv.getElementsByTagName('*')
    console.log(insidediv2)
}
// HTMLCollection(3) [p, p, p]



// return only P tags
function onlyP(){
    const onlyPtag = document.getElementsByTagName('p')
    console.log(onlyPtag)
}
// HTMLCollection(8) [p, p, p, p, p, p, p, p]
