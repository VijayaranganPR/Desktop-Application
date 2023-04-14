const p = document.getElementsByTagName('p')[0]
p.className = 'newClassName'
console.log(p)              // <p class="newClassName">new class name will be inserted</p>

const again = document.getElementsByClassName('newClassName')[0]
console.log(again)          // <p class="newClassName">new class name will be inserted</p>
