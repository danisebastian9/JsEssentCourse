"use strict"

//********************************
//*** Estos son los callbacks de JS

function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function (resultado) { // Calcular trabaja con la funcion de arriba
    console.log('Suma', resultado)
},function (resultado) {
    console.log('Resta', resultado)
})


// calcular(d1, d2, func, func)