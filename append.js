// Node.js program to demonstrate the
// fs.appendFile() method
// Import the filesystem module
const fs = require('fs');
// Get the file contents before the append operation
console.log("\nFile Contents of file before append:",
fs.readFileSync("programming.txt", "utf8"));
fs.appendFile("programming.txt", "NOde JS", (err) => {
if (err) {
console.log(err);
}
else {
// Get the file contents after the append operation
console.log("\nFile Contents of file after append:",
fs.readFileSync("programming.txt", "utf8"));
}
});