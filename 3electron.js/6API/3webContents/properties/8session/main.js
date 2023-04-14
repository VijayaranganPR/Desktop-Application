/*
A Session used by this webContents.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.session)         // 1
    })
}

app.whenReady().then(createWindow)

/*
Session {
  resolveProxy: [Function: resolveProxy],
  getCacheSize: [Function: getCacheSize],
  clearCache: [Function: clearCache],
  clearStorageData: [Function: clearStorageData],
  flushStorageData: [Function: flushStorageData],
  setProxy: [Function: setProxy],
  forceReloadProxyConfig: [Function: forceReloadProxyConfig],
  setDownloadPath: [Function: setDownloadPath],
  enableNetworkEmulation: [Function: enableNetworkEmulation],
  disableNetworkEmulation: [Function: disableNetworkEmulation],
  setCertificateVerifyProc: [Function: setCertificateVerifyProc],
  setPermissionRequestHandler: [Function: setPermissionRequestHandler],
  setPermissionCheckHandler: [Function: setPermissionCheckHandler],
  setDisplayMediaRequestHandler: [Function: setDisplayMediaRequestHandler],
  setDevicePermissionHandler: [Function: setDevicePermissionHandler],
  setBluetoothPairingHandler: [Function: setBluetoothPairingHandler],
  clearHostResolverCache: [Function: clearHostResolverCache],
  clearAuthCache: [Function: clearAuthCache],
  allowNTLMCredentialsForDomains: [Function: allowNTLMCredentialsForDomains],
  isPersistent: [Function: isPersistent],
  setUserAgent: [Function: setUserAgent],
  getUserAgent: [Function: getUserAgent],
  setSSLConfig: [Function: setSSLConfig],
  getBlobData: [Function: getBlobData],
  downloadURL: [Function: downloadURL],
  createInterruptedDownload: [Function: createInterruptedDownload],
  setPreloads: [Function: setPreloads],
  getPreloads: [Function: getPreloads],
  loadExtension: [Function: loadExtension],
  removeExtension: [Function: removeExtension],
  getExtension: [Function: getExtension],
  getAllExtensions: [Function: getAllExtensions],
  getSpellCheckerLanguages: [Function: getSpellCheckerLanguages],
  setSpellCheckerLanguages: [Function: setSpellCheckerLanguages],
  availableSpellCheckerLanguages: [Getter],
  setSpellCheckerDictionaryDownloadURL: [Function: setSpellCheckerDictionaryDownloadURL],
  listWordsInSpellCheckerDictionary: [Function: listWordsInSpellCheckerDictionary],
  addWordToSpellCheckerDictionary: [Function: addWordToSpellCheckerDictionary],
  removeWordFromSpellCheckerDictionary: [Function: removeWordFromSpellCheckerDictionary],
  setSpellCheckerEnabled: [Function: setSpellCheckerEnabled],
  isSpellCheckerEnabled: [Function: isSpellCheckerEnabled],
  spellCheckerEnabled: [Getter/Setter],
  preconnect: [Function: preconnect],
  closeAllConnections: [Function: closeAllConnections],
  getStoragePath: [Function: getStoragePath],
  setCodeCachePath: [Function: setCodeCachePath],
  clearCodeCaches: [Function: clearCodeCaches],
  cookies: [Getter],
  netLog: [Getter],
  protocol: [Getter],
  serviceWorkers: [Getter],
  webRequest: [Getter],
  storagePath: [Getter]
}
*/