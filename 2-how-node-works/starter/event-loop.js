const fs = require('fs');

setTimeout(() => console.log('1: timer 1 is finished'), 0);
setImmediate(() => console.log('2: immediate 1 finished'));
fs.readFile('test-file.txt', () => {
  console.log('3: I/0 finished');
});
console.log('4: hello from the top-level code');