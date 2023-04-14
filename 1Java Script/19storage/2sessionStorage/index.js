// session storage is a storage space will store data for future use, so we don't need to make a call to the server each time.
// can access less storage than local storage and more storage than cookies
// can be accessed only the browser which creates it.
// expire when close the tab
// won't sent with request.

/*
setItem('name','value')
getItem('name')
removeItem('name')
clear()
*/


// to see session storage
/*
1) go to developer tools
2) application tab
3) storage --> session storage
*/

// set item to session storage
sessionStorage.setItem('name', 'vijay')
sessionStorage.setItem('age',21)
sessionStorage.setItem('work', 'ML')


// getting item from local storage
console.log(sessionStorage.getItem('name'))   // vijay
console.log(sessionStorage.getItem('age'))    // 21



// removing item from local storage
sessionStorage.removeItem('name')



// clearing all item
sessionStorage.clear()



// seting object
sessionStorage.setItem('objectvalue', {a:1, b:2})
console.log(sessionStorage.getItem('objectvalue'));   // [object Object]

sessionStorage.clear()
// to do in right way
sessionStorage.setItem('objectvalue',JSON.stringify({a:1, b:2}))
console.log(sessionStorage.getItem('objectvalue'));   // {'a':1, 'b':2} as string
console.log(JSON.parse(sessionStorage.getItem('objectvalue')))    // {a:1, b:2} as object