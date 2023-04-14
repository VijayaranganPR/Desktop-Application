// getting a class by class name
const className = document.getElementsByClassName('first')
console.log(className)          // HTMLCollection [p.first.test1]



// getting all the class having both class names
const classNames = document.getElementsByClassName('test1 first')
console.log(classNames)         // HTMLCollection [p.first.test1]



// indexing class elements
const test = document.getElementsByClassName('test1')
console.log(test[0])            // <p class="first test1">hello word1</p>
console.log(test[1])            // <p class="second test1">hello word2</p>
console.log(test[2])            // <p class="third test1">hello word3</p>
console.log(test[3])            // undefined



// filtering
filteredTest = Array.prototype.filter.call(test,(x) => x.textContent == 'hello word3')
console.log(filteredTest)       // [p.third.test1]



// getting class elements inside id.
const parentDOM = document.getElementById("parent-id");
console.log(parentDOM)      //<div id="parent-id">…</div>
const test1 = parentDOM.getElementsByClassName('test1')
//   const test12 = document.getElementsByClassName("test1");           // we can also use this
console.log(test1)          // HTMLCollection(3) [p.first.test1, p.second.test1, p.third.test1]
