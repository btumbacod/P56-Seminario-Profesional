var objeto1 = {
    nombre: "Bryan",
    apellido: "Tumbaco",
    altura: "170",
    cantLibros: "20"
}
var objeto2 = {
    nombre: "Andres",
    apellido: "Castro",
    altura: "180",
    cantLibros: "20"
}
var objeto3 = {
    nombre: "Rosa",
    apellido: "Zambrano",
    altura: "150",
    cantLibros: "10"
}
var objeto4 = {
    nombre: "Gabriela",
    apellido: "Morocho",
    altura: "170",
    cantLibros: "10"
}
var objeto5 = {
    nombre: "Maria",
    apellido: "Lara",
    altura: "160",
    cantLibros: "50"
}

var personas = [objeto1, objeto2, objeto3, objeto4, objeto5]

//Reccorrer un arreglo de objetos.
for (persona of personas) {
    console.log(`${persona.nombre} ${persona.apellido}`)
}

console.log('/n')

for (var i = 0; i < personas[i].nombre; i++) {
    console.log(`${personas[i].nombre} ${personas[i].apellido}`)
}

//Uso de filtros.

const esAlta = (objeto) => objeto.altura >= 170
var personasAltas = personas.filter(esAlta)

console.log(personasAltas)
for (persona of personasAltas) {
    console.log(`${persona.nombre} ${persona.apellido}`)
}

//Uso de la funcion map con arreglos

const pasarAlturaMetros = (objeto) => {
    objeto.altura = objeto.altura / 100
    return objeto
}

//var otrasPersonas = [...personas]

var otrasPersonas = []
for (personas of personas) {
    otrasPersonas.push({ ...persona })
}

otrasPersonas.map(pasarAlturaMetros)
console.log(personas)
console.log(otrasPersonas)

/*var personasMetros = personas.map(pasarAlturaMetros)
console.log(personasMetros)

var personasMetros2 = personas.map(function (objeto) {
    objeto.altura = objeto.altura * 100
    return objeto
})

console.log(personasMetros2)*/

//Uso de funcion reduce en arreglos
const contabilizarLibros = (acum, { cantLibros }) => acum + cantLibros

var totalLibros = personas.reduce(contabilizarLibros, 0)

console.log(`La cantidad de libro en total es ${totalLibros}`)