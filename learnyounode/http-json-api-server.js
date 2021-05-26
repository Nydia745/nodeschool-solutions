const http = require('http');
const url = require('url');


/* /* the path '/api/unixtime' accepts the same  
query string but returns UNIX epoch time in milliseconds (the number of  
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  */

const server = http.createServer( (req, res) => {
  console.log(req.url);
  const reqUrl = new url.URL(req.url, 'http://example.com');
  console.log(reqUrl);
  if (reqUrl.pathname === "/api/parsetime") {
    const date = new Date(reqUrl.searchParams.get('iso'));
    const dataObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(dataObj));
  } else if (reqUrl.pathname === "/api/unixtime") {
    const date = new Date(reqUrl.searchParams.get('iso'));
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({ unixtime: date.getTime() }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);

