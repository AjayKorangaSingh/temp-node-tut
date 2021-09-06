const os = require("os");
const name = os.userInfo();

console.log(name);
console.log(`The system is up for ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalSpace: os.totalmem(),
  freeSpace: os.freemem(),
};

console.log(currentOS);
