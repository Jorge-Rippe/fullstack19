/*
conceptos generales
* variables y tipos de datos
* condicionales
* ciclos
* funciones
* estructuras datos
* clases y objetos
* DOM
*/

// definicion variables: let, const, var
let nombre = "juan"; //entornos locales
const apellido = "perez"; //costantes
var edad = 30; // entornos globales

//entrada
//let segundoApellido = prompt("ingrese su apellido");

//tipos de datos
edad = 20; //entero
let peso = 50.5; //decimal
let nombreCompleto = "jhon mendez"; //cadena
let sesion = true; //boleanos
let arreglo = [1, 2, 3, 4, 5]; //array
let objeto = {
  nombre: "juan",
  apellido: "perez",
  edad: 30,
};
let nulo = null; //no hay valor
let indefinido = undefined; //no se ha definido su valor
//salida de datos
//console.log(segundoApellido);

//condicionales
/*
const correo = prompt("ingrese su correo");
const contrasena = prompt("ingrese su contrasena");

if (correo == "jhon@gmail.com") {
  console.log("correo correcto");
  if (contrasena == "123456") {
    console.log("contrasena correcta");
  } else {
    console.log("contrasena incorrecta");
  }
} else {
  console.log("usuario no existe");
} */
/* operadores
logicos: true, false
aritmeticos: +, -, *, /, %
relacionales: >, <, >=, <=, ==, !=, ===
*/
console.log(typeof edad);
edad = "18";
edad = edad + 1;
//debugger;
if (edad === 18) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}
console.log(edad);
console.log(typeof edad);

/* ciclos: inicio, condicion, incremento */
for (let inicio = 0; inicio <= 5; inicio++) {
  console.log(inicio, edad);
}

const nombreAnimal = "homero";
console.log(nombreAnimal.length);
console.log(nombreAnimal[0]);

for (let inicio = 0; inicio < nombreAnimal.length; inicio++) {
  console.log(nombreAnimal[inicio]);
}
let i = 0;
while (i < nombreAnimal.length) {
  console.log(nombreAnimal[i]);
  i++;
}
/*
funciones: bloques de codigo que se ejecutan cuando se llama
aislan el codigo para reutilizarlo
* funciones nativas: lenguaje js
* funciones personalizadas: propias
* funciones terceros: API
ESTRUCTURA DE UNA FUNCION: NOMBRE - PARAMETRO
*/
//define una funcion que sume dos numeros y retorne el resultado
function suma(a, b) {
  return a + b;
}

console.log(suma);
//callback - funcion como parametro de otra

function operaciones(operacion) {
  console.log("operaciones");
  return operacion(10, 20);
}
console.log(operaciones(suma));

//funciones con variable en una funcion anonima
const resta = function (a, b) {
  console.log("resta", a - b);
};

//funcion de flecha
const multiplicacion = (a, b) => {
  let edad = 30;
  let suma = 10;
  return a * b;
};

console.log(suma(1, 1));
console.log(suma(1, 1));
console.log(suma(1, 1));
console.log(suma(1, 1));
console.log(resta(10, 20));
console.log(multiplicacion(10, 20));

//funcioens autoinvocadas
(() => {
  let edad = 30;
  let suma = 10;
  console.log("funcion autoinvocada");
})();

//estructuras datos: arrays, listas
listaNumeros = [1, 2, 3, 4, 5];
listaUsuarios = ["jhon", "felipe", "maria"];
console.log(listaNumeros[4]);
console.log(listaUsuarios[0][1]);

//for of in
for (let usuario of listaUsuarios) {
  console.log(usuario);
}

for (let indice in listaUsuarios) {
  console.log(`posicion ${indice} usuario: ${listaUsuarios[indice]}`);
}

//funciones de arrasy
listaUsuarios.push("juan");
console.log(listaUsuarios);
listaUsuarios.pop();
console.log(listaUsuarios);
listaUsuarios.shift();
console.log(listaUsuarios);
listaUsuarios.splice(1);
console.log(listaUsuarios);

let comidas = ["🍔", "🌭", "🍕", "🍟", "🍔"]
//filtros
//find: busca el primer elemento dentro de una lista
let busquedaComida = comidas.find((comida) => comida == "🍔");
busquedaComida;
//filter: devuelve un nuevo array con el fitro
let filtroComidas = comidas.filter((comida) => comida == "🍔");
filtroComidas
//recorrer una lista
//foreach
comidas.forEach((comida, indice) => {
  console.log(`${comida} -> ${indice}`);
})
//devolver una nueva lista con nuevos elementos
comidas;
let combo = comidas.map((comida) => comida + "🍺")
combo
//agregar una nueva comida
//comidas.push('🍗')
//comidas[0] = "🍜"
//comidas
//agregar una nueva comida
//comidas.push('🍗')
//comidas[0] = "🍜"
//comidas
/*
{
 "cedula":"123",
 "datos": {
    "nombre":"jorge",
    "apellido":"Rippe",
    "telefonos": [123454,4645464]
    }
  */
let usuarios = [
  {
    correo: "jhon@gmail.com",
    nombre: "jhon",
  },
  {
    nombre: "jhon",
    correo: "gabriel@gmail.com",
  },
  {
    nombre: "felipe",
    correo: "felipe@gmail.com",
  },
];
let filtroUsuarios = usuarios.filter((usuario) => usuario.nombre == "jhon");
console.log(filtroUsuarios);

let estudiante = new Object();
estudiante.nombre = "jhon";
estudiante.apellido = "mendez";
estudiante.correos = ["jhon@gmail.com", "jhon@outlook.com"];
estudiante.edad = 45;
estudiante.activo = true;
estudiante.peso = 45.5;
estudiante.direcciones = {
  casa: "calle falsa 123",
  trabajo: "calle falsa 456",
};
estudiante.direcciones.casa;
estudiante.correos[1];

let estudiantes = [];
let estudiante2 = {
  nombre: "juan",
  apellido: "fernandez",
};
estudiantes.push(estudiante);
estudiantes.push(estudiante2);
estudiantes[0].direcciones.casa;

console.log(estudiantes);

function Usuario(correo, contrasena) {
  this.correo = correo;
  this.contrasena = contrasena;
}

let nuevoUsuario = new Usuario("jhon@gmail.com", "123", "jhon");
console.log(nuevoUsuario);
class Profesor {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  darClase() {
    return `el profesor ${this.nombre} dara clase...`;
  }
}

let profesorFullstack = new Profesor("jhon", "mendez", 45);
let profesorPython = new Profesor("juan", "mendez", 45);
profesorFullstack.darClase();
console.log(profesorPython.darClase());
//MAPS - ESTRUCTURA DE DATOS
/*
"CLAVE":"VALOR"
*/

const miMapa = new Map();
miMapa.set("nombre", "jhon");
miMapa.set("edad", 15);
miMapa.set("profesion", "ingeniero");
miMapa.get("nombre");
miMapa.size;
miMapa.has("edad");
miMapa.delete("edad");
miMapa;