"use strict"


//********************************
//*** Parámetros de una función
// Cualquier cantidad de parametros

function saludar(nombre, edad) {
	console.log('Hola: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

var mensaje = saludar("yacaFx", 34);

console.log(mensaje)