const os = require("node:os");

console.log("arquitectura ", os.arch());
console.log("plataforma ", os.platform());
console.log("cpus ", os.cpus().length);
console.log("memoria libre ", os.freemem());
console.log("total memoria ", os.totalmem());
console.log("directorio actual ", os.homedir());
