const http = require('http');
const data = require('./data')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  if(req.url.length <= 2){
    let num = req.url.slice(1);
    if(!isNaN(num)){
        let index = Number(num)
        res.end(JSON.stringify(data[index]));
    }
  } else {
    res.end(JSON.stringify(data));
  }
//   console.log(req.url.length);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});