/*
A boolean which when true indicates that the app is currently running under an ARM64 translator (like the macOS Rosetta Translator Environment or Windows WOW).

You can use this property to prompt users to download the arm64 version of your application when they are mistakenly running the x64 version under Rosetta or WOW.
*/

const { app } = require('electron')

if (process.platform === 'darwin') {
  console.log(app.runningUnderARM64Translation)
}
app.quit()
