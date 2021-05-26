/* const { filterLS } = require("./mymodule");

const dirname = process.argv[2];
const ext = process.argv[3];

filterLS(dirname, ext, (err, files) => {
  for (const file of files) {
    console.log(file)
  }
}); */

const filterLS = require("./mymodule");

const dirname = process.argv[2];
const ext = process.argv[3];

filterLS(dirname, ext, (err, files) => {
/*   for (const file of files) {
    console.log(file)
  } */

  files.forEach( file => {
    console.log(file)
  })
}); 

