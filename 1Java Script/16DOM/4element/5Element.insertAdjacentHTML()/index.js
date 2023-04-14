const ol = document.getElementById('orderedList')

// beforebegin
ol.insertAdjacentHTML('beforebegin', `<p>beforebegin</p>`)
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList]

// afterbegin
ol.insertAdjacentHTML('afterbegin', `<p>afterbegin</p>`)
console.log(ol.children)     // HTMLCollection(2) [p, li]

// beforeend
ol.insertAdjacentHTML('beforeend', `<p>beforeend</p>`)
console.log(ol.children)     // HTMLCollection(3) [p, li, p]

// afterend
ol.insertAdjacentHTML('afterend', `<p>afterend</p>`)
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList]