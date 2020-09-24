var nombreApellido = 'Bryan Tumbaco'
var edad = 23

//Funcion tipo declarativa

function imprimirEdad(nombre, edad) {
    console.log(`${nombre} tiene la edad de: ${edad}`)
}

//Funcion tipo Flecha
var imprimirEdad2 = (nombre, edad) => {
    console.log(`${nombre} tiene la edad de: ${edad}`)
}

//Funcion tipo Expresiva
var imprimirEdad3=function(nombre, edad){
    console.log(`${nombre} tiene la edad de: ${edad}`)
}


imprimirEdad(nombreApellido, edad)
imprimirEdad2(nombreApellido, edad)
imprimirEdad3(nombreApellido, edad)


