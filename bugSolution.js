const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  let counter = 0;
  const intervalId = setInterval(() => {
    counter++;
    if (counter === 10) {
      clearInterval(intervalId);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 100);

  req.on('close', () => {
    clearInterval(intervalId); // Clear the interval if the client closes the connection
    console.log('Client closed connection');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});