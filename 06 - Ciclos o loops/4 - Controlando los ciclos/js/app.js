"use strict"

//********************************0
//*** Control de ciclos
// break | continue
// continue = ignora todo lo que sigue y sigue en el siguiente caso. 
// break = rompe la instruccion y nos saca del ciclo. 

var contador = 0 
var cuenta = 0;

for(contador = 0;contador<= 20;contador++) { 
    if(contador == 5){
        break
    }
   if (contador % 2 == 0) { 
      continue;
   } 
   cuenta++;
   debugger;
} 

console.log("Hay" + cuenta + " números impares");