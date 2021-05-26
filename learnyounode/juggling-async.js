const http = require('http');

let results = [];
let cnt = 0;

for (let i = 2; i < 5; i++) {
  http.get(process.argv[i], res => {
    let resStr = '';
    res.setEncoding('utf8');
    res.on('data', data => {
      resStr += data;
    });
    res.on('end', () => {
      results[i-2] = resStr;
      cnt++;
      if (cnt === 3) {
        results.forEach( data => console.log(data));
      }
    });
  });
}


/* 'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      results[index] = data.toString()
      count++
      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
 */
