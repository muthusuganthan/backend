const add = require("./add");
const sub = require("./sub");
const os = require("node:os");
const { mul, div } = require("./mul");

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mul(5, 5));
console.log(div(5, 5));
console.log(os.cpus());
