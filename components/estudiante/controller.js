const storage = require('./storage')

function addEstudiante(cedula, nombre, apellido, correo) {
    return new Promise((resolve, reject) => {
        let carrera = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
        }
        storage.add( estudiante )
        resolve( estudiante )
    })
}

function getEstudiante( filtroEstudiante ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroEstudiante ) )
    } )
}

function updateEstudiante(idEstudiante,cedula, nombre, apellido, correo) {
    return new Promise( async (resolve, reject) => {
        let carrera = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo: descripcion,
        }
        const result = await storage.update(idEstudiante, estudiante)
        resolve( result )
    })
}

function deletEstudiante(idEstudiante) {
    return new Promise((resolve, reject) => {
        storage.delete( idEstudiante )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addEstudiante,
    getEstudiante,
    updateEstudiante,
    deletEstudiante,
}