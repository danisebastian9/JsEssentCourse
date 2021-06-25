"use strict"

// SYMBOLS son unicos e inmutables. Dato unico alrededor el programa

var simbolo1 = Symbol();
var simbolo2 = Symbol();

simbolo1 === simbolo2 // false. 

var ambiente = Symbol('dev');