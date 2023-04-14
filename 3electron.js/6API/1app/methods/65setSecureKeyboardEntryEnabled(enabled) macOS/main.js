/*
enabled boolean - Enable or disable Secure Keyboard Entry
Set the Secure Keyboard Entry is enabled in your application.

By using this API, important information such as password and other sensitive information can be prevented from being intercepted by other processes.

See Apple's documentation for more details.

Note: Enable Secure Keyboard Entry only when it is needed and disable it when it is no longer needed.
*/

const { app } = require('electron');

// Enable secure keyboard entry
app.setSecureKeyboardEntryEnabled(true);

// Check if secure keyboard entry is enabled
if (app.isSecureKeyboardEntryEnabled()) {
  console.log('Secure keyboard entry is enabled');
} else {
  console.log('Secure keyboard entry is not enabled');
}
