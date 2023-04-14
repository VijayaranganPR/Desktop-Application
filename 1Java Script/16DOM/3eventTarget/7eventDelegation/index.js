/*
Here we ar assinging event for only one ancestor of all child elements
even if there are 1000 td this code will work
*/

let currnetHighlight;
function clickFunction(e){
    if (currnetHighlight != undefined){
        currnetHighlight.style.removeProperty("background-color");
    }
    currnetHighlight = e.target;
    currnetHighlight.style.backgroundColor = 'red';
}

const table = document.getElementById('table')
table.addEventListener('click', clickFunction)
// it still can be improved