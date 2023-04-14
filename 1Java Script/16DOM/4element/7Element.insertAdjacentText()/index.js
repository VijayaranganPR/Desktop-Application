const p = document.getElementById('p')
console.log(document.body.childNodes)     // NodeList(4) [text, p#p, text, script]


// beforebegin
p.insertAdjacentText('beforebegin', 'before begin')
console.log(document.body.childNodes)     // NodeList(5) [text, text, p#p, text, script]

// afterbegin
p.insertAdjacentText('afterbegin', 'after begin ')
console.log(p.childNodes)     // NodeList(2) [text, text]

// beforeend
p.insertAdjacentText('beforeend', ' beforeend')
console.log(p.childNodes)     // NodeList(3) [text, text, text]

// afterend
p.insertAdjacentText('afterend', 'afterend')
console.log(document.body.childNodes)     // NodeList(6) [text, text, p#p, text, text, script]