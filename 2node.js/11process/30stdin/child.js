process.stdin.on('readable', () => {
    data = process.stdin.read()
    process.stdout.write(data)
})

process.stdout.write('Message from child')
