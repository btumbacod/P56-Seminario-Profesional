//Declaracion de variables
var nombre = 'Bryan'
var apellido = 'Tumbaco'

var nombre = 'Bryan', apellido = 'Tumbaco';

var nombreMayusculas = nombre.toUpperCase();

var apellidoMayusculas = apellido.toUpperCase();

//JavaScript Puro
console.log(nombreMayusculas + ' ' + apellidoMayusculas);
//Especificacion de JavaScript -EcmaScript +6
console.log(`${nombreMayusculas} ${apellidoMayusculas}`);

var primeraLetraNombre = nombre.charAt(0);
var longuitudNombre = nombre.length;
var subcadenaNombre = nombre.substr(1, 3);

console.log(primeraLetraNombre)
console.log(longuitudNombre)
console.log(subcadenaNombre)


