const { fork } = require('child_process');

const forked = fork('./child.js');
forked.on('message', (message) => {
  console.log('time taken = '+ message +' sec');
});

forked.send({ n: 40 });


/*
total time taken for each process
0.0109 sec
*/