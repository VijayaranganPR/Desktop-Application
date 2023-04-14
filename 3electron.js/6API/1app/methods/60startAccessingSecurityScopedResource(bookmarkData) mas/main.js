/*
bookmarkData string - The base64 encoded security scoped bookmark data returned by the dialog.showOpenDialog or dialog.showSaveDialog methods.
Returns Function - This function must be called once you have finished accessing the security scoped file. If you do not remember to stop accessing the bookmark, kernel resources will be leaked and your app will lose its ability to reach outside the sandbox completely, until your app is restarted.

Start accessing a security scoped resource. 
With this method Electron applications that are packaged for the Mac App Store may reach outside their sandbox to access files chosen by the user. 
See Apple's documentation for a description of how this system works.
*/

const { app } = require('electron');
const fs = require('fs');

// Read the data for a security-scoped bookmark from a file
const bookmarkData = fs.readFileSync('document.txt');

// Start accessing the security-scoped resource
app.startAccessingSecurityScopedResource(bookmarkData);

// Your code here that accesses the security-scoped resource

// Stop accessing the security-scoped resource when finished
app.stopAccessingSecurityScopedResource();
