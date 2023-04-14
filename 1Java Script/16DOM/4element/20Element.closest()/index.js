/*
The closest() method of the Element interface traverses the element and its parents 
(heading toward the document root) until it finds a node that matches the specified CSS selector.
*/

const element = document.getElementsByClassName('chapter1')
console.log(element)    // HTMLCollection [td.chapter1]

const closestElement1 = element[0].closest('.book')
console.log(closestElement1)     // <tbody class="book">…</tbody>

const closestElement2 = element[0].closest('tbody')
console.log(closestElement2)     // <tbody class="book">…</tbody>


// getting closest element with tbody in table
const closestElement3 = element[0].closest('table tbody')
console.log(closestElement3)     // <tbody class="book">…</tbody>


// getting closest element with table as parent of tbody
const closestElement4 = element[0].closest('table > tbody')
console.log(closestElement4)     // <tbody class="book">…</tbody>

// getting closest element which is not tr - you can see that it returns the same element td
const closestElement5 = element[0].closest(':not(tr)')
console.log(closestElement5)     // <td class="chapter1">chapter 1</td>
