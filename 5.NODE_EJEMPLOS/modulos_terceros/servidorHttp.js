import http from "node:http";

/*recurso*/
const autores = [
    {
        _id: 1,
        nombre: "Gabriel García Márquez",
        nacionalidad: "Colombiano",
        correo: "gabriel.garcia@ejemplo.com"
    },
    {
        _id: 2,
        nombre: "Pablo Neruda",
        nacionalidad: "Chileno",
        correo: "pablo.neruda@ejemplo.com"
    },
    {
        _id: 3,
        nombre: "Jorge Luis Borges",
        nacionalidad: "Argentino",
        correo: "jorge.borges@ejemplo.com"
    },
];

/* crear servidor*/

const servidor = http.createServer((solicitud, respuesta) => {
    console.log(solicitud.headers);
    const autorJson = JSON.stringify(autores);
    respuesta.end(autorJson);
});

/*servidor escuchando*/
const puerto = process.env.PUERTO_BACKEND = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto:${puerto}...`);
});

 