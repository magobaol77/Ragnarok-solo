const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 8766;

http.createServer((request, response) => {
  const requestedPath = decodeURIComponent(request.url.split("?")[0]);
  let filePath = path.join(root, requestedPath);
  if (filePath.endsWith(path.sep)) filePath = path.join(filePath, "index.html");

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.statusCode = 404;
      response.end("Not found");
      return;
    }
    response.end(data);
  });
}).listen(port, "127.0.0.1");
