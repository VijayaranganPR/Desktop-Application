process.on('message', (message) => {
    console.log(`${message}`);
    process.send('Hello from child!');
    process.exit()
});