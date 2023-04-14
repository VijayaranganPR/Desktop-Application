/*
clientTop - element borderTopWidth
clientLeft - borderLeftWidth
clientHeight - from element start to element end with padding, without border(element hight + 2 * padding)
clientWidth - from element start to element end with padding, without border(element width + 2 * padding)
*/
const ele = document.getElementById('div')



// for height
const eleHeight = document.getElementById('height')
eleHeight.style.border = '2px solid green'
eleHeight.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleHeight.style.top = `${ele.offsetTop + parseInt(window.getComputedStyle(ele).borderTopWidth)}px`;
eleHeight.style.left = `${ele.offsetLeft + ele.offsetWidth}px`;
eleHeight.style.height = `${ele.clientHeight - 4}px`;


// for width
const eleWidth = document.getElementById('width')
eleWidth.style.border = '2px solid green'
eleWidth.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleWidth.style.top = `${ele.offsetTop - eleWidth.offsetHeight}px`;
eleWidth.style.left = `${ele.offsetLeft + parseInt(window.getComputedStyle(ele).borderWidth)}px`;
eleWidth.style.width = `${ele.clientWidth - 4}px`;



// for top
const eleTop = document.getElementById('top')
eleTop.style.border = '2px solid green'
eleTop.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleTop.style.top = `${ele.offsetTop}px`;
eleTop.style.left = `${ele.offsetLeft - eleTop.offsetWidth}px`;
eleTop.style.height = `${ele.clientTop - 4}px`;



// for left
const eleLeft = document.getElementById('left')
eleLeft.style.border = '2px solid green'
eleLeft.style.position = 'absolute';

// these -4 is added for removing extra pixels added by the size line border (2 * 2 = 4)
eleLeft.style.top = `${ele.offsetTop+ ele.offsetHeight}px`;
eleLeft.style.left = `${ele.offsetLeft}px`;
eleLeft.style.width = `${ele.clientLeft - 4}px`;




const p = document.getElementById('p')
p.style.top = `${ele.offsetTop+ele.offsetHeight + eleLeft.offsetHeight}px`
p.style.position = 'absolute'
p.append(document.createElement('br'))
p.append(document.createElement('br'))
p.append(`clientTop: ${ele.clientTop}`)
p.append(document.createElement('br'))
p.append(`clientLeft: ${ele.clientLeft}`)
p.append(document.createElement('br'))
p.append(`clientHeight: ${ele.clientHeight}`)
p.append(document.createElement('br'))
p.append(`clientWidth: ${ele.clientWidth}`)