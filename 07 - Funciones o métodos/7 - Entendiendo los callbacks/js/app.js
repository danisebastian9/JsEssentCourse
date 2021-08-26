"use strict"

//********************************
//*** Estos son los callbacks de JS
// Callbacks para controlar procesos asincronos 

function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function (resultado) { // Calcular trabaja con la funcion de arriba
    console.log('Suma', resultado) // Resultado hace match con sumarCB(suma)
},function (resultado) { // Este siguiente callback hace match con restarCB(restar)
    console.log('Resta', resultado)
})


// calcular(d1, d2, func, func)