const fs = require('fs');
const path = require('path');

/* const filterLS = (dirname, ext, callback) => {
  const extension = "." + ext;
  fs.readdir(dirname, (err, files) => {
    if (err) {
      callback(err, null);
    } 
    let filteredFiles = files.filter(file => path.extname(file) === extension);
    callback(null, filteredFiles);
  })
}

module.exports = {filterLS}; */

module.exports = (dirname, ext, callback) => {
  const extension = "." + ext;
  fs.readdir(dirname, (err, files) => {
    if (err) {
      return callback(err);
    } 
    let filteredFiles = files.filter(file => path.extname(file) === extension);
    callback(null, filteredFiles);
  })
}
