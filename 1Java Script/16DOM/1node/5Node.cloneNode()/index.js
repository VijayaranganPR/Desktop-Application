const list1 = document.getElementById('list')
console.log(document.body.children)         // HTMLCollection(2) [ol#list, script, list: ol#list]

list2 = list1.cloneNode(false)      // only ol is cloned
document.body.append(list2)
console.log(document.body.children)         // HTMLCollection(3) [ol#list, script, ol#list, list: ol#list]
console.log(list2.children)         // HTMLCollection []

list3 = list1.cloneNode(true)      // ol and it's child will be cloned
document.body.append(list3)
console.log(document.body.children)         // HTMLCollection(4) [ol#list, script, ol#list, ol#list, list: ol#list]
console.log(list3.children)         // HTMLCollection(3) [li, li, li]
