/*
Enables full sandbox mode on the app. 
This means that all renderers will be launched sandboxed, regardless of the value of the sandbox flag in WebPreferences.

This method can only be called before app is ready.
*/
const { app } = require('electron');

// Enable the sandboxing of renderer processes
app.enableSandbox();
app.quit()