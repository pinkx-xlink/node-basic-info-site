// const { createServer } = require('node:http');
const http = require('http');
// const path = require("path");
const fs = require('fs');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();

const server = http.createServer((req, res) => {
  // // Build file path
  // let filePath = path.join(
  //   __dirname,
  //   "public",
  //   // If there isn't a specified route, display index.html
  //   // otherwise use the speficied .html file
  //   req.url === "/" ? "index.html" : req.url
  // );
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Interal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/about') {
    eventEmitter.emit('switchPage', res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
  // res.statusCode = 200;
  // // Build file path
  // let filePath = path.join(
  //   __dirname,
  //   "public",
  //   // If there isn't a specified route, display index.html
  //   // otherwise use the speficied .html file
  //   req.url === "/" ? "index.html" : req.url
  // );

  // File extension
  // let extname = path.extname(filePath);

  // Initial content type
  // let contentType = "text/html";

  // Check ext and set content type
  // switch (extname) {
  //   case ".js":
  //       contentType = "text/javascript";
  //       break;
  //     case ".css":
  //       contentType = "text/css";
  //       break;
  //     case ".json":
  //       contentType = "application/json";
  //       break;
  //     case ".png":
  //       contentType = "image/png";
  //       break;
  //     case ".jpg":
  //       contentType = "image/jpg";
  //       break;
  // }

  // Check if contentType is text/html but no .html file ext
  // if (contentType == "text/html" && extname == "") filePath += ".html";

  // // log the filePath
  // console.log(filePath);

  // // Read file
  // fs.readFile(filePath, (err, content) => {
  //   if (err) {
  //       if (err.code == "ENOENT") {
  //           // Page not found
  //           fs.readFile(
  //               path.join(__dirname, "public", "404.html"),
  //               (err, content) => {
  //                   res.writeHead(404, { "Content-Type": "text.html" });
  //                   res.end(content, "utf8");
  //               }
  //           );
  //       } else {
  //           // Some server error
  //           res.writeHead(500);
  //           res.end(`Server Error: ${err.code}`);
  //       }
  //   } else {
  //       // Success
  //       res.writeHead(200, { "Content-Type": contentType });
  //       res.end(content, "utf8");
  //       eventEmitter.emit('switchPage', res);
  //   } 
  // });
});

eventEmitter.on('switchPage', (res) => {
  // console.log('started');
  fs.readFile('about.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Interal server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});