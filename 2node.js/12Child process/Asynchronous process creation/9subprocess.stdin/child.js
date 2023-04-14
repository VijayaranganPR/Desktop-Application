process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write(`Received message: ${chunk}`);
    }
  });
process.stdout.write('Message from child')