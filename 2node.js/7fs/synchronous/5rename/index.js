let fs = require('fs')

// change file name before run to have better understanding
try{
    fs.renameSync("NameNotChanged", 'NameChanged')
    console.log('name changed')    
}
catch(err){
    throw err;
}