/*
offsetTop - from top to element border(not included) (top + margin)
offsetLeft - from left to element border(not included) (left + margin)
offsetHeight - from element top border to element bottom border(2 * border + 2 * padding + element hight)
offsetWidth - from element left border to element right border(2 * border + 2 * padding + element width)
*/
const ele = document.getElementById('div')



// for height
const eleHeight = document.getElementById('height')
eleHeight.style.border = '2px solid green'
eleHeight.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleHeight.style.top = `${ele.offsetTop}px`;
eleHeight.style.left = `${ele.offsetLeft + ele.offsetWidth}px`;
eleHeight.style.height = `${ele.offsetHeight - 4}px`;



// for width
const eleWidth = document.getElementById('width')
eleWidth.style.border = '2px solid green'
eleWidth.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleWidth.style.top = `${ele.offsetTop - eleWidth.offsetHeight}px`;
eleWidth.style.left = `${ele.offsetLeft}px`;
eleWidth.style.width = `${ele.offsetWidth - 4}px`;



// for top
const eleTop = document.getElementById('top')
eleTop.style.border = '2px solid green'
eleTop.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleTop.style.top = `${0}px`;
eleTop.style.left = `${ele.offsetLeft - eleTop.offsetWidth}px`;
eleTop.style.height = `${ele.offsetTop - 4}px`;



// for left
const eleLeft = document.getElementById('left')
eleLeft.style.border = '2px solid green'
eleLeft.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleLeft.style.top = `${ele.offsetTop}px`;
eleLeft.style.left = `${0}px`;
eleLeft.style.width = `${ele.offsetLeft - 4}px`;




const p = document.getElementById('p')
p.style.top = `${ele.offsetTop+ele.offsetHeight}px`
p.style.position = 'absolute'
p.append(document.createElement('br'))
p.append(document.createElement('br'))
p.append(`offsetTop: ${ele.offsetTop}`)
p.append(document.createElement('br'))
p.append(`offsetLeft: ${ele.offsetLeft}`)
p.append(document.createElement('br'))
p.append(`offsetHeight: ${ele.offsetHeight}`)
p.append(document.createElement('br'))
p.append(`offsetWidth: ${ele.offsetWidth}`)
p.append(document.createElement('br'))
p.append(`offsetParent: ${ele.offsetParent}`)
