/*
API DOM
-QUE ELEMENTO QUIERO RENDERIZAR
-DONDE QUIERO RENDERIZAR?
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

