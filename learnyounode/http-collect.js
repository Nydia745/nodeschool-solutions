const http = require('http');

http.get(process.argv[2], res => {
  let resStr = "";
  res.setEncoding("utf8");
  res.on('data', data => {
    resStr += data;
  });
  res.on('end', () => {
    console.log(resStr.length);
    console.log(resStr);
  })
})

/* const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
}) */
