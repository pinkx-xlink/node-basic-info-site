const { createServer } = require('node:http');
const dt = require('./module');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // const baseURL = req.protocol + '://' + req.headers.host + '/';
  // const q = new URL(req.url,baseURL);
  // console.log(q);
   /// const txt = q.year + " " + q.month;

  // res.write(req.url); 
  // ^ prints '/' followed by whatever text is typed at the end of the url
  res.write('The date and time are currently: ' + dt.myDateTime());
  // res.end(txt);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});