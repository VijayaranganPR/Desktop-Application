/*
The app.getLocale method in Electron allows you to retrieve the locale of the operating system. 
The locale is a string that represents the language and cultural preferences of the user.

Returns string - The current application locale, fetched using Chromium's l10n_util library. Possible return values are documented here.

To set the locale, you'll want to use a command line switch at app startup, which may be found here.

Note: When distributing your packaged app, you have to also ship the locales folder.

Note: This API must be called after the ready event is emitted.

Note: To see example return values of this API compared to other locale and language APIs, see app.getPreferredSystemLanguages().
*/

const { app } = require('electron');

console.log(app.getLocale());
// Output: 'en-US'

// original: ''
