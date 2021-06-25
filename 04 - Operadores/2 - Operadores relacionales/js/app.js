"use strict"

//********************************
//*** Operadores relacionales permiten validar o definir el tipo de relaciones entre dos entidades

var datoA = 10;
var datoB = 20;

// MAYOR QUE >
var mayorQue = datoA > datoB; // false
console.log("Es "+ datoA + " mayor que " + datoB + ": " + mayorQue);

// MENOR QUE <
var menorQue =  datoA < datoB; // true
console.log("Es "+ datoA + " menor que " + datoB + ": " + menorQue);

// MAYOR O IGUAL QUE >=
var mayorOIgualQue =  datoA >= datoB; // false
console.log("Es "+ datoA + " mayor o igual que " + datoB + ": " + mayorOIgualQue);

// MENOR O IGUAL QUE <=
var menorOIgualQue =  datoA <= datoB; // true
console.log("Es "+ datoA + " menor o igual que " + datoB + ": " + menorOIgualQue);

// IGUAL QUE == 
var igualQue =  datoA == datoB; // false
console.log("Es "+ datoA + " igual que " + datoB + ": " + igualQue);

// NO ES IGUAL QUE O ES DIFERENTE QUE !=
var noEsIgualQue =  datoA != datoB; // true
console.log("Es "+ datoA + " no es igual o es diferente que " + datoB + ": " + noEsIgualQue);

