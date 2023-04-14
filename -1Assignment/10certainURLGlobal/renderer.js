// setting event handler for 'open button'
document.getElementById('open').addEventListener('click', () => {
    
    // get and store the value from text box and empty the text box
    const textBox = document.getElementById('url')
    const urlString = textBox.value
    textBox.value = ''

    // sending the hostname and href to the IpcMain
    const url = new URL(urlString)
    send('openLink', [url.hostname, url.href])
})
