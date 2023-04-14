/*
by using Element.outerHTML we can get the whole element and change the whole element
the changes are live.

it's not changing the value insterd it inserts a new element in the place of the tag.
the reference will still refert to the old element.
*/


const ele = document.getElementById('name')
console.log(ele.parentNode)
/*
<div id="name"><p>vijayarangan</p></div>
*/
console.log(ele.outerHTML)      // vijayarangan
console.log(ele)                // <p id="name">vijayarangan</p>


setTimeout(() => ele.outerHTML = '<p>changed to vijay</p>', 1000)
// after changing the parent node will be changed to null
setTimeout(() => console.log(ele.parentNode), 1000)           // null
// new value is inserted but still the 'ele' refers to the old element
setTimeout(() => console.log(ele.outerHTML), 1000)           // as string <div id="name"><p>vijayarangan</p></div>
setTimeout(() => console.log(document.body.firstElementChild), 1000)        // <p>changed to vijay</p>