import { readFileSync } from "node:fs";

// macOS, Linux, and Windows
const archivo = readFileSync("modulos_nativos/archivos/archivo1.txt", "utf-8");

console.log(`operacion1.. ${archivo}`);
console.log(`operacion2..`);
console.log(`operacion3..`);
