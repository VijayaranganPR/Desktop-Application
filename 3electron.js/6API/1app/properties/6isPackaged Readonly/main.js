/*
A boolean property that returns true if the app is packaged, false otherwise. 
For many apps, this property can be used to distinguish development and production environments.
*/


const { app } = require('electron')

console.log(app.isPackaged)         // false
