/*
A string property that indicates the current application's name, which is the name in the application's package.json file.

Usually the name field of package.json is a short lowercase name, according to the npm modules spec. You should usually also specify a productName field, 
which is your application's full capitalized name, and which will be preferred over name by Electron.
*/
const { app } = require('electron')

console.log(app.name)         // hello-world
app.quit()