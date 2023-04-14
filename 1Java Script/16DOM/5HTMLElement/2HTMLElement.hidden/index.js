/* 
.hidden have a boolean value to specify wheather it need to be visible or not
*/ 
const h1 = document.getElementById('h1');
const button = document.getElementById('button');           // button to hide text
button.addEventListener('click', () =>{
    h1.hidden = !h1.hidden;
})

const p = document.getElementById('p')
setInterval(() => {p.hidden = !p.hidden} , 1000)        // blink with 1 sec interval