const element = document.getElementById('input')
console.log(element.hasAttribute('name'))       // true
console.log(element.hasAttribute('type'))       // true
console.log(element.hasAttribute('id'))         // true
console.log(element.hasAttribute('value'))      // false
console.log(element.hasAttribute('userAttribute'))      // true
