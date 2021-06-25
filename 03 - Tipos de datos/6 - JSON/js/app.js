"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Daniel', twitter: 'myTwitter'};

persona.nombre // 'Daniel'

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona // agrega el primer objeto a este.
]

personas // todo el objeto 


var personaJSON = JSON.stringify(persona); 
// Convierte todo en una cadena de texto para enviarla a un servidor o DB


var nuevaPersona = JSON.parse(personaJSON)
// Reestructurar a JSON. Convierte la cadena de texto en formato JSON


