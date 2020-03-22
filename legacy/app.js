const http = require('http');

const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.write(Buffer.from(JSON.stringify({ data: 'contains valuable legacy container data' })));
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
