process.on('message', (message) => {
    console.log(message)

    process.send('Message from child process')
    process.exit()      // else process will run continuously won't exit
})
