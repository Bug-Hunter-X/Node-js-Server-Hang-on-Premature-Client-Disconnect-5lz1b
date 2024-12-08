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

  //This is the problematic part. If the client closes connection before the interval completes
  //The server process might hang.
  //The server needs to handle the close event to prevent memory leak and unexpected behavior. 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});