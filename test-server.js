const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node is running!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
