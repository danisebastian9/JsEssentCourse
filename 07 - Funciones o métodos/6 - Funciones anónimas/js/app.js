"use strict"

//********************************
//*** Función Anonima de JavaScript
// Permite no asignarle nombre a un conjunto de instrucciones sin necesidad de asociarlo


/*(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()*/

var saludar = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}

// Consola
// saludar('Sebastian') 
// "Hola Sebastian"