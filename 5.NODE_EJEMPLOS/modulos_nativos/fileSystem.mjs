import { readFile } from "node:fs";

readFile("modulos_nativos/archivos/archivo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("error!!!! ", err);
  }
  console.log(data);
  console.log("operacion 1..");
});
console.log("operacion 2..");
console.log("operacion 3..");
