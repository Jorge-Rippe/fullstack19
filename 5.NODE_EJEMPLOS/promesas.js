function validarDatos() {
  const datos = {
    email: "jhons@gmail.com",
    pass: 123,
  };

  return new Promise((resolve, reject) => {
    if (datos.email === "jhon@gmail.com") {
      resolve("Bienvenido");
    } else {
      reject("Error");
    }
  });
}

validarDatos()
  .then((datos) => {
    console.log("ingreso...", datos);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("fin de la promesa");
  });
