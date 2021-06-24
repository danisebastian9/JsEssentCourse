"use strict"

// let

var nombre = 'Daniel';

console.log(nombre)

function saludo() {
  let nombre = 'yacafx';
    console.log(nombre)
    
  let edad = 34; 
  console.log(edad)
}

//  console.log(edad) El let es una variable local y no se puede correr fuera de la funcion. Var si es una funcion global

saludo();