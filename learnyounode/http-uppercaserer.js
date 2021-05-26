const http = require('http');
const map = require('through2-map');

// through-map transforms the stream data as it is passing through

/**************************************************************************
through2-map allows you to create a transform stream using only a single  
function that takes a chunk of data and returns a chunk of data. It's  
designed to work much like Array#map() but for streams
*******************************************************************************/
const server = http.createServer( (req, res) => {
  if (req.method == 'POST') {
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  }
});

server.listen(process.argv[2]);
