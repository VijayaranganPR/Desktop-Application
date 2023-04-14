/*
options Object
    applicationName string (optional) - The app's name.
    applicationVersion string (optional) - The app's version.
    copyright string (optional) - Copyright information.
    version string (optional) macOS - The app's build version number.
    credits string (optional) macOS Windows - Credit information.
    authors string[] (optional) Linux - List of app authors.
    website string (optional) Linux - The app's website.
    iconPath string (optional) Linux Windows - Path to the app's icon in a JPEG or PNG file format. On Linux, will be shown as 64x64 pixels while retaining aspect ratio.
Set the about panel options. This will override the values defined in the app's .plist file on macOS. See the Apple docs for more details. On Linux, values must be set in order to be shown; there are no defaults.

If you do not set credits but still wish to surface them in your app, AppKit will look for a file named "Credits.html", "Credits.rtf", and "Credits.rtfd", in that order, in the bundle returned by the NSBundle class method main. 
The first file found is used, and if none is found, the info area is left blank. See Apple documentation for more information.
*/

const { app } = require('electron');

// Set the options for the About panel
app.setAboutPanelOptions({
  applicationName: 'My Electron App',
  applicationVersion: '1.0.0',
  copyright: 'Copyright 2022 My Electron App',
  credits: 'Developed by Vijayarangan',
  version: '1.0.0'
});
app.showAboutPanel()
app.quit()