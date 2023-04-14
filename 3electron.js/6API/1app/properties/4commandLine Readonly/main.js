/*
A CommandLine object that allows you to read and manipulate the command line arguments that Chromium uses.
*/
const { app } = require('electron')

console.log(app.commandLine.getSwitchValue('some-switch'))
