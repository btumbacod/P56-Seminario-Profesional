var docente = {
    Nombre: 'Bryan',
    Apellido: 'Tumbaco',
    Afiliacion: 'UPS',
    Correo: 'btumbacod@est.ups.edu.ec'

}
var docente2 = {
    Nombre: 'Andres',
    Apellido: 'Castro',
    Afiliacion: 'UPS',
    Correo: 'jcastrop3@est.ups.edu.ec'

}

function ImprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log( `${nombre} ${objeto.apellido}`)
}
function ImprimirNombreMinuscula(objeto) {
    console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}

ImprimirNombreMayuscula(docente)
ImprimirNombreMayuscula(docente)