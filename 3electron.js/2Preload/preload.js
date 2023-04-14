const {contextBridge} = require('electron')


// context isolation is true so the render can't directly access the variable so we need to create a bridge
contextBridge.exposeInMainWorld('versions', {
    console: function(){console.log(globalThis)},
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
})
