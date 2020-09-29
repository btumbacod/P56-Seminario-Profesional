var docente1 = {
    nombre: 'Bryan',
    apellido: 'Tumbaco'
}

var docente2 = {
    nombre: 'Andres',
    apellido: 'Castro'

}

//Asignacion por paso de valor
var otroDocente = {
    ...docente
}

console.log(docente1 == docente2)
console.log(docente == otroDocente)
console.log(otroDocente.nombre)
docente3 = otroDocente
console.log(docente3 == otroDocente)