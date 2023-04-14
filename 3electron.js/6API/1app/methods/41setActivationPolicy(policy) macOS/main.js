/*
policy string - Can be 'regular', 'accessory', or 'prohibited'.
Sets the activation policy for a given app.

Activation policy types:

'regular' - The application is an ordinary app that appears in the Dock and may have a user interface.
'accessory' - The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
'prohibited' - The application doesn’t appear in the Dock and may not create windows or be activated.

*/

const {app} = require('electron');

app.on('ready', () => {
    app.setActivationPolicy('regular')
    app.quit()
})
