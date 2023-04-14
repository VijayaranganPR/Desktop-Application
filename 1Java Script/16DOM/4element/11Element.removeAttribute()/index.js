// works in both standard and non standard attribute

// non standard attribute
const element = document.getElementById('input')
console.log(element.getAttribute('userAttribute'))  // someUserAttributeValue
element.removeAttribute('userAttribute')
console.log(element.getAttribute('userAttribute'))  // null


// standard attribute
const element1 = document.getElementById('input')
console.log(element1.getAttribute('type'))  // text
element1.removeAttribute('type')
console.log(element1.getAttribute('type'))  // null

