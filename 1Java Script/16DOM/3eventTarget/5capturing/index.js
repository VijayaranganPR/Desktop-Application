/*
event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
event.currentTarget -- this – is the “current” element, the one that has a currently running handler on it.

*/


function click(e){
    console.log(e.target)
    console.log(e.currentTarget)
}


// capturing
const div1 = document.getElementById('div1')
div1.addEventListener('click', click, {capture: true})

const div2 = document.getElementById('div2')
div2.addEventListener('click', click, true)

const div3 = document.getElementById('div3')
div3.addEventListener('click', click, {capture: true})
