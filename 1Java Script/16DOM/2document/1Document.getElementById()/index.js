// changing font color
para = document.getElementById('para1')
para.style.color = 'blue'
console.log(para)


// changing backgroundColor
para = document.getElementById('para2')
para.style.backgroundColor = 'pink'
console.log(para)


// create element -- will return null
// element not in document must need to be inserted first
const element1 = document.createElement('p')
element1.id = 'para3';
console.log(document.getElementById('para3'))



// use only document. to find inner elements don't use parent element
const parentDOM = document.getElementById("parent-id");
console.log(parentDOM)
// const test1 = parentDOM.getElementById('test1')
// throw error
// Uncaught TypeError: parentDOM.getElementById is not a function
const test1 = document.getElementById("test1");
console.log(test1)