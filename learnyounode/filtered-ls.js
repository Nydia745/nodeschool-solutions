/* const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, filenames) => {
  if (err) {
    return console.log(err);
  }
  const extension = "." + process.argv[3];
  let filteredFilenames = filenames.filter(filename => path.extname(filename) === extension)
  for (const filteredFilename of filteredFilenames) {
    console.log(filteredFilename);
  }
});
 */
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
