// using preventDefault() 
const google = document.getElementById('google')
google.addEventListener('click',() =>{
    event.preventDefault()
    alert("I won't let you open google")
})


// using passive - even if prevent default is used it will run default actions
const mail = document.getElementById('mail')
mail.addEventListener('click',() =>{
    alert("I won't let you open mail")
    event.preventDefault()
},{passive: true})


// using return false -> both will run
const mdn = document.getElementById('mdn')
mdn.addEventListener('click',() =>{
    alert("I won't let you open mdn")
    return false
})


// using return false in on<event> -> both will not run
const mdn2 = document.getElementById('mdn2')
mdn2.addEventListener('click',() =>{
    alert("I won't let you open mdn")
})



// using return false in on<event> -> both will not run
const mdn3 = document.getElementById('mdn3')
mdn3.addEventListener('click',() =>{
    if(event.defaultPrevented){
        alert("default is prevented")
    }
    else{
        alert('default is not revented')
    }
    
})

const mdn4 = document.getElementById('mdn4')
mdn4.addEventListener('click',() =>{
    if(event.defaultPrevented){
        alert("default is prevented")
    }
    else{
        alert('default is not revented')
    }
    
})