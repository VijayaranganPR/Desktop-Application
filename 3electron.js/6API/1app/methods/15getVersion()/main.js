/*
Returns string - The version of the loaded application. 
If no version is found in the application's package.json file, the version of the current bundle or executable is returned.


The app.getVersion method in Electron allows you to retrieve the version of the application. 
The version is specified in the version field of the package.json file of your application.
*/

const { app } = require('electron');

console.log(app.getVersion());
// Output: '1.0.0'
