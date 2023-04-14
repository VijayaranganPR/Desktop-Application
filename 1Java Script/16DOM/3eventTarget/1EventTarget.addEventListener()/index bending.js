/* 
the below event listener will first check if the element in id "one" value is one or not
if "one" the it will change it's value to "other name" else it will change it value to "one"

*/
function changeOne(){
    const condition = event1.firstChild.nodeValue.trim() === "one"
    event1.firstChild.nodeValue = condition ?'other name': 'one'
}
const event1 = document.getElementById('one')
event1.addEventListener('click', changeOne)



// abortController()
// increase the counter till 3.

controler = new AbortController()
const event2 = document.getElementById('two')
event2.addEventListener('click',changeTwo,{signal: controler.signal})
count = 0
function changeTwo(){
    const condition = event2.textContent.trim() === '3'
    if(condition){
        controler.abort()
    }
    else{
        event2.firstChild.nodeValue = count
        count += 1
    }
}


// options

// capture
const outerCapture1 = document.getElementById('parent1 capture')
const innerCapture1 = document.getElementById('capture')

outerCapture1.addEventListener('click', () => console.log('outer capture'), {capture:true})
innerCapture1.addEventListener('click', () => console.log(`inner capture`))

// not capture - by default the capture will be false
const outerCapture2 = document.getElementById('parent2 capture')
const innerCapture2 = document.getElementById('not capture')

outerCapture2.addEventListener('click', () => console.log('outer capture'))
innerCapture2.addEventListener('click', () => console.log(`inner capture`))



// once
const once1 = document.getElementById('once')
once1.addEventListener('click', ()=>console.log("executed once I won't execute again"), {once: true})




// this keyword 

// in event listener - refers to the element
function callback(e){
    console.log(e.currentTarget)
    console.log(this)
    console.log(e.currentTarget === this)
}

const thisElement = document.getElementById('callback')
thisElement.addEventListener('click',callback)

// anonomous callback
const thisElement1 = document.getElementById('anonomous')
thisElement1.addEventListener('click',function(e){
    console.log(e.currentTarget)
    console.log(this)
    console.log(e.currentTarget === this)
})

// arrow callback
const thisElement2 = document.getElementById('arrow')
thisElement2.addEventListener('click',(e) =>{
    console.log(e.currentTarget)
    console.log(this)
    console.log(e.currentTarget === this)
})

// in "onclick" inline
function thisKeyword2(){
    console.log(this)
}

// getting data from outside
const thisElement3 = document.getElementById('gettingData')
const bindVal = 'a string of changed this value using bind'
thisElement3.addEventListener('click',function() {console.log(this)}.bind(bindVal))


