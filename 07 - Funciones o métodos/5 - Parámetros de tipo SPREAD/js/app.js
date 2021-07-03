"use strict"

//********************************
//*** Parámetros SPREAD
// PArametros que se pueden esparcir 
// A diferencia de REST no necesitamos declararlo en la estructura original de la funcion
// Sino en la envocacion. 

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) { // ...otros # REST
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log('Ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile"); // SPREAD 