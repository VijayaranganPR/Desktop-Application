/*
to dispatch an event automatically by JavaScript without manually giving the action like click
*/

// manual Event 
const manualButton = document.getElementById('mannualButton')
manualButton.addEventListener('click', () =>{
    console.log('manual button pressed')
})


// automatic event
const automaticButton = document.getElementById('automaticButton')
automaticButton.addEventListener('click',  () =>{
    console.log('automaticButton button pressed')
})

const clickEvent = new Event('click')
automaticButton.dispatchEvent(clickEvent)


// custom event
const customButton = document.getElementById('customButton')
customButton.addEventListener('anyName',()=>{
    console.log('customButton is pressed')
})

const customEvent = new Event('anyName');
customButton.dispatchEvent(customEvent)
