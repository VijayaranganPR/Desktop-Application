// creating the element and appending to body
const down = document.getElementById('down')

const newElement = document.createElement('p')
newElement.className = 'newElementClassName'
newElement.innerHTML = '<strong>hi</strong> this is new message'

document.body.append(newElement)


