let fs = require('fs')

try{
    data = fs.readFileSync('newTextFile', 'utf8')
    console.log(data)       //  some text in here
}
catch(err){
    throw err;
}
