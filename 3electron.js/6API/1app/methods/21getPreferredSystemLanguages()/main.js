/*
The app.getPreferredSystemLanguages method in Electron allows you to retrieve the preferred languages of the system. 
The preferred languages are an array of strings that represent the language and cultural preferences of the user.

Returns string[] - The user's preferred system languages from most preferred to least preferred, including the country codes if applicable. A user can modify and add to this list on Windows or macOS through the Language and Region settings.

The API uses GlobalizationPreferences (with a fallback to GetSystemPreferredUILanguages) on Windows, \[NSLocale preferredLanguages\] on macOS, and g_get_language_names on Linux.

This API can be used for purposes such as deciding what language to present the application in.

Here are some examples of return values of the various language and locale APIs with different configurations:

For Windows, where the application locale is German, the regional format is Finnish (Finland), and the preferred system languages from most to least preferred are French (Canada), English (US), Simplified Chinese (China), Finnish, and Spanish (Latin America):
app.getLocale() returns 'de'
app.getSystemLocale() returns 'fi-FI'
app.getPreferredSystemLanguages() returns ['fr-CA', 'en-US', 'zh-Hans-CN', 'fi', 'es-419']
On macOS, where the application locale is German, the region is Finland, and the preferred system languages from most to least preferred are French (Canada), English (US), Simplified Chinese, and Spanish (Latin America):
app.getLocale() returns 'de'
app.getSystemLocale() returns 'fr-FI'
app.getPreferredSystemLanguages() returns ['fr-CA', 'en-US', 'zh-Hans-FI', 'es-419']
Both the available languages and regions and the possible return values differ between the two operating systems.

As can be seen with the example above, on Windows, it is possible that a preferred system language has no country code, and that one of the preferred system languages corresponds with the language used for the regional format. On macOS, the region serves more as a default country code: the user doesn't need to have Finnish as a preferred language to use Finland as the region,and the country code FI is used as the country code for preferred system languages that do not have associated countries in the language name.
*/

const { app } = require('electron');

app.on('ready', () => {
    console.log(app.getPreferredSystemLanguages())
    app.quit()
})

// [ 'en-US' ]
