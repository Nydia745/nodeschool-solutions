const http = require('http');
const fs = require('fs');

/* Both request and response are also Node streams! Which means that you can  
use the streaming abstractions to send and receive data if they suit your  
use-case.
 */

const server = http.createServer( (req, res) => {
  // src.pipe(dst) to pipe the data from the src stream to the dst stream
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));