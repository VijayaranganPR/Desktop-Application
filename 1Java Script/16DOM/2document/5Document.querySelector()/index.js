/*
The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 

If no matches are found, null is returned.
*/


// getting first td tag 
const data1 = document.querySelector('td')
console.log(data1)   // <td class="first">data1</td>

// getting first class element
const data2 = document.querySelector('.first')
console.log(data2)  // <td class="first">data1</td>

// getting first id element
const data3 = document.querySelector('#second');
console.log(data3)  // <td id="second">data3</td>



// navigation - As all CSS selector strings are valid, you can also negate selectors
const navigation1 = document.querySelector('div.user-panel.main input[name = "login"]')
console.log(navigation1)    // <input type="text" name="login">



// Escaping special characters (\)
// const escaping1 = document.querySelector('#foo\bar')    // error
const escaping1 = document.querySelector('#foo\\bar')    
console.log(escaping1)      // null
const escaping2 = document.querySelector('#foo\\\bar')    
console.log(escaping2)      // null
const escaping3 = document.querySelector('#foo\\\\bar')    
console.log(escaping3)      // <div id="foo\bar"></div>



// Escaping special characters (:)
// const escaping4 = document.querySelector('#foo:bar')    // error
// const escaping4 = document.querySelector('#foo\:bar')   // error  
const escaping4 = document.querySelector('#foo\\:bar')   
console.log(escaping4)      // <div id="foo:bar"></div>
