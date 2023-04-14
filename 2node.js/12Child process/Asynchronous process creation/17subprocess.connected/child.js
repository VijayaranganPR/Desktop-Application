process.on('message', (message) => {
    console.log(message)
    console.log(process.connected, 'inside on message in child')
    process.send('Message from child process')
    process.exit()      // else process will run continuously won't exit
})

