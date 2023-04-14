/*
webContents is an EventEmitter. It is responsible for rendering and controlling a web page and is a property of the BrowserWindow object. 

These methods can be accessed from the webContents module:
*/

const {app, BrowserWindow, webContents} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    console.log(win.webContents)

    console.log(webContents)
}


app.on('ready', () => {
    createWindow()
})

/* output of win.webContects
EventEmitter {
  isDestroyed: [Function: isDestroyed],
  destroy: [Function: destroy],
  close: [Function: close],
  getBackgroundThrottling: [Function: getBackgroundThrottling],
  setBackgroundThrottling: [Function: setBackgroundThrottling],
  getProcessId: [Function: getProcessId],
  getOSProcessId: [Function: getOSProcessId],
  equal: [Function: equal],
  _loadURL: [Function: _loadURL],
  reload: [Function: reload],
  reloadIgnoringCache: [Function: reloadIgnoringCache],
  downloadURL: [Function: downloadURL],
  getURL: [Function: getURL],
  getTitle: [Function: getTitle],
  isLoading: [Function: isLoading],
  isLoadingMainFrame: [Function: isLoadingMainFrame],
  isWaitingForResponse: [Function: isWaitingForResponse],
  stop: [Function: stop],
  canGoBack: [Function: canGoBack],
  goBack: [Function: goBack],
  canGoForward: [Function: canGoForward],
  goForward: [Function: goForward],
  canGoToOffset: [Function: canGoToOffset],
  goToOffset: [Function: goToOffset],
  canGoToIndex: [Function: canGoToIndex],
  goToIndex: [Function: goToIndex],
  getActiveIndex: [Function: getActiveIndex],
  clearHistory: [Function: clearHistory],
  length: [Function: length],
  isCrashed: [Function: isCrashed],
  forcefullyCrashRenderer: [Function: forcefullyCrashRenderer],
  setUserAgent: [Function: setUserAgent],
  getUserAgent: [Function: getUserAgent],
  savePage: [Function: savePage],
  openDevTools: [Function: openDevTools],
  closeDevTools: [Function: closeDevTools],
  isDevToolsOpened: [Function: isDevToolsOpened],
  isDevToolsFocused: [Function: isDevToolsFocused],
  enableDeviceEmulation: [Function: enableDeviceEmulation],
  disableDeviceEmulation: [Function: disableDeviceEmulation],
  toggleDevTools: [Function: toggleDevTools],
  inspectElement: [Function: inspectElement],
  setIgnoreMenuShortcuts: [Function: setIgnoreMenuShortcuts],
  setAudioMuted: [Function: setAudioMuted],
  isAudioMuted: [Function: isAudioMuted],
  isCurrentlyAudible: [Function: isCurrentlyAudible],
  undo: [Function: undo],
  redo: [Function: redo],
  cut: [Function: cut],
  copy: [Function: copy],
  paste: [Function: paste],
  pasteAndMatchStyle: [Function: pasteAndMatchStyle],
  delete: [Function: delete],
  selectAll: [Function: selectAll],
  unselect: [Function: unselect],
  replace: [Function: replace],
  replaceMisspelling: [Function: replaceMisspelling],
  findInPage: [Function: findInPage],
  stopFindInPage: [Function: stopFindInPage],
  focus: [Function: focus],
  isFocused: [Function: isFocused],
  sendInputEvent: [Function: sendInputEvent],
  beginFrameSubscription: [Function: beginFrameSubscription],
  endFrameSubscription: [Function: endFrameSubscription],
  startDrag: [Function: startDrag],
  attachToIframe: [Function: attachToIframe],
  detachFromOuterFrame: [Function: detachFromOuterFrame],
  isOffscreen: [Function: isOffscreen],
  startPainting: [Function: startPainting],
  stopPainting: [Function: stopPainting],
  isPainting: [Function: isPainting],
  setFrameRate: [Function: setFrameRate],
  getFrameRate: [Function: getFrameRate],
  invalidate: [Function: invalidate],
  setZoomLevel: [Function: setZoomLevel],
  getZoomLevel: [Function: getZoomLevel],
  setZoomFactor: [Function: setZoomFactor],
  getZoomFactor: [Function: getZoomFactor],
  getType: [Function: getType],
  _getPreloadPaths: [Function: _getPreloadPaths],
  getLastWebPreferences: [Function: getLastWebPreferences],
  getOwnerBrowserWindow: [Function: getOwnerBrowserWindow],
  inspectServiceWorker: [Function: inspectServiceWorker],
  inspectSharedWorker: [Function: inspectSharedWorker],
  inspectSharedWorkerById: [Function: inspectSharedWorkerById],
  getAllSharedWorkers: [Function: getAllSharedWorkers],
  _print: [Function: _print],
  _printToPDF: [Function: _printToPDF],
  _setNextChildWebPreferences: [Function: _setNextChildWebPreferences],
  addWorkSpace: [Function: addWorkSpace],
  removeWorkSpace: [Function: removeWorkSpace],
  showDefinitionForSelection: [Function: showDefinitionForSelection],
  copyImageAt: [Function: copyImageAt],
  capturePage: [Function: capturePage],
  setEmbedder: [Function: setEmbedder],
  setDevToolsWebContents: [Function: setDevToolsWebContents],
  getNativeView: [Function: getNativeView],
  isBeingCaptured: [Function: isBeingCaptured],
  setWebRTCIPHandlingPolicy: [Function: setWebRTCIPHandlingPolicy],
  getMediaSourceId: [Function: getMediaSourceId],
  getWebRTCIPHandlingPolicy: [Function: getWebRTCIPHandlingPolicy],
  takeHeapSnapshot: [Function: takeHeapSnapshot],
  setImageAnimationPolicy: [Function: setImageAnimationPolicy],
  _getProcessMemoryInfo: [Function: _getProcessMemoryInfo],
  id: 1,
  session: [Getter],
  hostWebContents: [Getter],
  devToolsWebContents: [Getter],
  debugger: [Getter],
  mainFrame: [Getter],
  opener: [Getter],
  _windowOpenHandler: null,
  ipc: [Getter],
  _events: [Object: null prototype] {
    '-ipc-message': [Function (anonymous)],
    '-ipc-invoke': [Function (anonymous)],
    '-ipc-message-sync': [Function (anonymous)],
    '-ipc-ports': [Function (anonymous)],
    crashed: [Function (anonymous)],
    'render-process-gone': [Function (anonymous)],
    'devtools-reload-page': [Function (anonymous)],
    '-new-window': [Function (anonymous)],
    '-will-add-new-contents': [Function (anonymous)],
    '-add-new-contents': [Function (anonymous)],
    login: [Function (anonymous)],
    'ready-to-show': [Function (anonymous)],
    'select-bluetooth-device': [Function (anonymous)],
    'input-event': [Function (anonymous)]
  },
  _eventsCount: 14
}
*/

/*
{
  create: [Function: create],
  fromId: [Function: fromId],
  fromFrame: [Function: fromFrame],
  fromDevToolsTargetId: [Function: fromDevToolsTargetId],
  getFocusedWebContents: [Function: getFocusedWebContents],
  getAllWebContents: [Function: getAllWebContents]
}
*/
