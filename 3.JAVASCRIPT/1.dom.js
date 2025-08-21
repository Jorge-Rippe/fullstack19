/*
API DOM
-QUE ELEMENTO QUIERO RENDERIZAR
-DONDE QUIERO RENDERIZAR? -> LECTURA
*/
//lecturas de selectores
let titulo =document.getElementsByTagName("h1"); //DOM
console.log(titulo);
console.log(titulo[1].innerHTML);
let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);
let textoTxt = document.querySelector("input[type='text']")
let textoTxtAll = document.querySelectorAll("input[type='text']"); //querySelectorAll
console.log(textoTxt);
console.log(textoTxtAll);
let rootId = document.getElementById("root");
console.log(rootId);

//actualizacion
titulo[0].className = "titulo";
titulo[0].innerText = "titulo nuevo";
titulo[1].style.color = "blue";
titulo[1].style.fontSize = "20px";
titulo[1].style.textAlign = "center";

for(let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "red";
}
console.log(titulo[0])

//eliminacion
parrafos[0].remove();
let parrafosId = document.getElementById("parrafosId");
console.log(parrafosId);
//parrafosId.remove();

//creacion DOM
const h2Nuevo = document.createElement("h2");
h2Nuevo.className = "titulo";
h2Nuevo.innerText = "<strong>nuevo texto<strong>";
console.log(h2Nuevo);
//parrafosId.innerHTML = h2Nuevo;
console.log(parrafosId);


let estudiantes = [];
const tabla = document.querySelector("#tabla table tbody");
console.log(tabla);
function agregarEstudiante() { 
  const nombreEstudiante = document.getElementById("nombre-estudiante").value;
  const apellidoEstudiante = document.getElementById("apellido-estudiante").value;

 /*
  const fila = document.createElement("tr");
  fila.innerHTML = `<td>${nombreEstudiante}</td><td>${apellidoEstudiante}</td>`;
  tabla.appendChild(fila);
  */

  let estudiante = {
    nombre: nombreEstudiante,
    apellido: apellidoEstudiante,
  };
  estudiantes.push(estudiante);
  console.log(estudiantes);
}


//eventos
const cargarDatosBtn = document.getElementById("cargar-datos");
cargarDatosBtn.addEventListener("click", () => {
  tabla.innerHTML = "";
  estudiantes.forEach((estudiante) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${estudiante.nombre}</td><td>${estudiante.apellido}</td>`;
    tabla.appendChild(fila);
  });
});