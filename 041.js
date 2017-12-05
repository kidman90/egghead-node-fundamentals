fs.readFile('zork.txt', function (err, data) {
console.log(data);
})
fs.readFile('zork.txt', function (err, data) {
console.log(data.toString());
})
fs.readFile('zork.txt', 'utf8', function (err, data) {
console.log(data);
})
