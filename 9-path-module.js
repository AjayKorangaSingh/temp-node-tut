const path = require("path");
console.log(path.sep);

const pathName = path.join("/content", "subFolder", "text.txt");
console.log(pathName);

console.log(path.basename(pathName));
console.log(path.resolve(__dirname, "content", "subFolder", "text.txt"));
