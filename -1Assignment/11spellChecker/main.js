const { app, session, BrowserWindow } = require('electron')

const createWindow = (spellChecker) => {

    // including spellchecker 
    session.defaultSession.setSpellCheckerEnabled(spellChecker)
    // newly added word
    session.defaultSession.addWordToSpellCheckerDictionary('vijay')

    const win = new BrowserWindow()
    win.loadFile('index.html')
}

app.whenReady().then(() => {
  
  createWindow(true)
})
