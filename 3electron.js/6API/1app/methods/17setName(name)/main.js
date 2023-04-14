/*
The app.setName method in Electron allows you to set the name of the application. 
The name parameter specifies the new name for the application.


name string
Overrides the current application's name.

Note: This function overrides the name used internally by Electron; it does not affect the name that the OS uses.
*/

const { app } = require('electron');

app.setName('My New Application Name');
console.log(app.getName());
// Output: 'My New Application Name'
