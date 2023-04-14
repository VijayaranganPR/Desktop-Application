// local storage is a storage space will store data for future use, so we don't need to make a call to the server each time.
// can access more storage
// can be accessed only the browser which creates it.
// no expire time
// won't sent with request.


/*
setItem('name','value')
getItem('name')
removeItem('name')
clear()
*/


// to see local storage
/*
1) go to developer tools
2) application tab
3) storage --> local storage
*/

// set item to local storage
localStorage.setItem('name', 'vijay')
localStorage.setItem('age',21)
localStorage.setItem('work', 'ML')


// getting item from local storage
console.log(localStorage.getItem('name'))   // vijay
console.log(localStorage.getItem('age'))    // 21



// removing item from local storage
localStorage.removeItem('name')



// clearing all item
localStorage.clear()



// seting object
localStorage.setItem('objectvalue', {a:1, b:2})
console.log(localStorage.getItem('objectvalue'));   // [object Object]

localStorage.clear()
// to do in right way
localStorage.setItem('objectvalue',JSON.stringify({a:1, b:2}))
console.log(localStorage.getItem('objectvalue'));   // {'a':1, 'b':2} as string
console.log(JSON.parse(localStorage.getItem('objectvalue')))    // {a:1, b:2} as object

localStorage.clear()