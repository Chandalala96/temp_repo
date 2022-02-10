//Modules 
//CommonJS, every file is a module (by default);
//Modules, Encapsulated code (only share minimum);


const {trap, slik} = require('./module-basics_3');
const sayHi = require('./utils_4');

const data = require('./alternative_5');
// console.log(data);
require('./mind_grenade_6');

sayHi("TrapSlik");
sayHi(trap);
sayHi(slik);
