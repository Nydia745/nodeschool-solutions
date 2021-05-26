const fs = require('fs');

const res = fs.readFileSync(process.argv[2]).toString();
console.log(res.split("\n").length - 1);
