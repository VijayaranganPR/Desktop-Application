window.addEventListener('DOMContentLoaded', () => {
    const backgroundPage = chrome.extension.getBackgroundPage()
  
    backgroundPage.console.log('Hello from the Chrome extension!')
  })
  