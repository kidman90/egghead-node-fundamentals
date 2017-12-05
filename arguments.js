// node arguments.js hello world
process.argv.forEach(function (val, index) {
  console.log(index + ': ' + val);
});
