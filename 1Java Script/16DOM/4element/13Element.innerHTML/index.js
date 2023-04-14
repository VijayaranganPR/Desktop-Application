/*
by using Element.innerHTML we can get and change the value of the element
the changes are live.

remember <script> won't have any effect on changing or adding
*/


const ele = document.getElementById('name')
console.log(document.body.innerHTML)
/*
<p id="name">vijayarangan</p>    
<script src="index.js"></script>
*/
console.log(ele.innerHTML)      // vijayarangan
console.log(ele)                // <p id="name">vijayarangan</p>

setTimeout(() => document.body.innerHTML = '<p>changed to vijay</p>', 1000)
setTimeout(() => document.body.innerHTML = '<p>vijayarangan changed back</p>', 2000)
setTimeout(() => console.log(document.body.innerHTML) , 2000)           // <p>vijayarangan changed back</p>
