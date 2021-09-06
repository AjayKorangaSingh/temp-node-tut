// CommonJS every file is module (by default)
// Modules  - encapsulated code (only share minimum)

const name = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

sayHi(name.jon);
sayHi(name.amit);
console.log(data);
