const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const resetButton = document.getElementById('reset')
const para = document.getElementById('para')

function plusOne(){
    para.textContent = Number(para.textContent) +1
}
function add(){
    addButton.addEventListener('click', plusOne)
}

removeButton.addEventListener('click', () =>{
    addButton.removeEventListener('click', plusOne)
})

resetButton.addEventListener('click', add)
add()



// options
// Only the capture setting matters to removeEventListener().

/*
consider this:
element.addEventListener("mousedown", handleMouseDown, { passive: true });


element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                 // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);                  // Fails
*/
