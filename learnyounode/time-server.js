const net = require('net');

const server = net.createServer( socket => {
  const curr = new Date(); 
  const result = curr.getFullYear() + '-' + pad(curr.getMonth() + 1) + '-' + pad(curr.getDate()) + ' ' +
  pad(curr.getHours()) + ':' + pad(curr.getMinutes()) + '\n';
  socket.end(result);
});

function pad(n) {
  return n < 10 ? '0' + n : n;
}

server.listen(process.argv[2]);

/* 'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2])) */
