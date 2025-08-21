/* callback*/
function obtenerDatos(contrasena, callback) {
  const datos = {
    nombre: "jhon",
    apellido: "mendez",
  };

  console.log(`contrase;a ${contrasena} leida...`);
  setTimeout(() => {
    callback(datos);
  }, 3000);
}

obtenerDatos(123, (datos) => {
  console.log(datos);
  console.log("operacion 1..");
});
console.log("operacion 2..");
console.log("operacion 3..");
