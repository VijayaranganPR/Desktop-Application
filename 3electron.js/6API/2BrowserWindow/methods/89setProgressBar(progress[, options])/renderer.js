const { ipcRenderer } = require('electron')

const downloadButton = document.getElementById('download-button')

downloadButton.addEventListener('click', function () {
  ipcRenderer.send('download-started')
})
