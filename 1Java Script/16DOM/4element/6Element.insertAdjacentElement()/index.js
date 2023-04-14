const ol = document.getElementById('orderedList')

function createElement(text){
    const newElement = document.createElement('p')
    newElement.textContent = text;
    return newElement
}


// beforebegin
ol.insertAdjacentElement('beforebegin', createElement('beforebegin'))
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList]

// afterbegin
ol.insertAdjacentElement('afterbegin', createElement('afterbegin'))
console.log(ol.children)     // HTMLCollection(2) [p, li]

// beforeend
ol.insertAdjacentElement('beforeend', createElement('beforeend'))
console.log(ol.children)     // HTMLCollection(3) [p, li, p]

// afterend
ol.insertAdjacentElement('afterend', createElement('afterend'))
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList]
