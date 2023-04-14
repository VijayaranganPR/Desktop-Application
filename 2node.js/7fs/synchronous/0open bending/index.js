let fs = require('fs')

fs.open('newTextFile','w', (err) =>{
    if(err) throw err;
    console.log('saved')
})
