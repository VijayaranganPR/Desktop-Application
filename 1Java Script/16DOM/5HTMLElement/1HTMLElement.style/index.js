// assigning values
const div = document.getElementById('div')
div.style.backgroundColor = 'red'
div.style.color = 'blue'


// using .cssText
const div1 = document.getElementById('div1')
div1.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
`

// Getting computed value
function random(){
    return Math.floor(Math.random()*255)
}

const div2 = document.getElementById('div2')
setInterval(() => {
    div2.style.backgroundColor = `rgb(${random()},${random()},${random()},${random()})`
}, 1000)


// Computed value
const div3 = document.getElementById('div3')
div3.style.backgroundColor = 'red'
div3.style.color = 'blue'
const k = getComputedStyle(div3)
console.log(k.backgroundColor)      // rgba(255, 0, 0, 0)
console.log(k.color)                // rgb(0, 0, 255)