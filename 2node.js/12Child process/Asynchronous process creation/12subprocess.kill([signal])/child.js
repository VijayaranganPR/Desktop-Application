const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

process.on('message', (message) => {
    const start = Date.now()
    const result = fibonacci(message.n);
    const end = Date.now()
    process.send((end - start) / 1000);
    process.exit()
});