const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('preloaded', {
    key : ipcRenderer.invoke('channel_name')
})
