/*
The app.getSystemLocale method in Electron allows you to retrieve the locale of the system. 
The locale is a string that represents the language and cultural preferences of the system.

Returns string - The current system locale. On Windows and Linux, it is fetched using Chromium's i18n library. On macOS, [NSLocale currentLocale] is used instead. To get the user's current system language, which is not always the same as the locale, it is better to use app.getPreferredSystemLanguages().

Different operating systems also use the regional data differently:

Windows 11 uses the regional format for numbers, dates, and times.
macOS Monterey uses the region for formatting numbers, dates, times, and for selecting the currency symbol to use.
Therefore, this API can be used for purposes such as choosing a format for rendering dates and times in a calendar app, especially when the developer wants the format to be consistent with the OS.

Note: This API must be called after the ready event is emitted.

Note: To see example return values of this API compared to other locale and language APIs, see app.getPreferredSystemLanguages().
*/

const { app } = require('electron');

app.on('ready', () => {
    console.log(app.getSystemLocale())
    app.quit()
})

// en-IN