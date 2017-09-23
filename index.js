const http = require('http');
const data = require('./data')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(JSON.stringify(data));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});