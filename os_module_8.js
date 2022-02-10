const os = require('os');


//info about current user
const user = os.userInfo();

console.log(user);

//check system uptin is seconds
console.log(`The system uptime is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};

console.log(currentOs);