"use strict"

//********************************
//*** Condición IF-ELSE

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
	resultado = "La condición se cumplió"; // Si la condicion se cumple
} else {
    resultado = "La condición no se cumplió"; // Si no entonces
}

console.log("El resultado de la evaluación if-else es: ", resultado);