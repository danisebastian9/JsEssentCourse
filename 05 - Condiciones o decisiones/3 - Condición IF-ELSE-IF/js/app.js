"use strict"

//********************************
//*** Condición IF-ELSE-IF 
// Hacer una planeacion adecuada de todo el flujo de datos.

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";


if (datoA > datoB){
	resultado = "La primer condición se cumplió";
} else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
}  else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB >= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB <= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB != datoA){
    resultado = "La segunda condición se cumplió";
} else {
	resultado = "No se cumplieron las condiciones";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);
