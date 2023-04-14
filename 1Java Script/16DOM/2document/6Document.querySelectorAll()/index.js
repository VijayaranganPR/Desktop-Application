/*
The Document method querySelectorAll() returns a static (not live) NodeList 
representing a list of the document's elements that match the specified group of selectors.
*/

// basic
const element1 = document.querySelectorAll('td')
console.log(element1)       // NodeList(6) [td.first, td.first, td#second, td#second, td.first, td.second]

// useful in getting all the elements with same id
const element2 = document.querySelectorAll('.first')
console.log(element2)       // NodeList(3) [td.first, td.first, td.first]

const element3 = document.querySelectorAll('#second')
console.log(element3)       // NodeList(2) [td#second, td#second]



// getting mutiple elements
const mutiple1 = document.querySelectorAll('div#one, div#two')
console.log(mutiple1)       // NodeList(2) [div#one, div#two]


// accessing child using parent using '>' and accessing using attribute value 
const mutiple2 = document.querySelector('div.parent.using')
console.log(mutiple2)       // NodeList(2) [div#one, div#two]
const mutiple3 = mutiple2.querySelectorAll('div.user-panel.main > input[name = "login"]')
console.log(mutiple3)       // NodeList [input]
const mutiple4 = mutiple2.querySelectorAll('div.user-panel.main > input[name = "login2"]')
console.log(mutiple4)       // NodeList [input]


// scope - gives unpredictable results
const select1 = document.querySelector('.select')
const inner1 = select1.querySelectorAll('.outer .inner')
console.log(inner1)          // NodeList [div.inner]

// to avoid use this
const select2 = document.querySelector('.select')
const inner2 = select2.querySelectorAll(':scope .outer .inner')
console.log(inner2)          // NodeList []
