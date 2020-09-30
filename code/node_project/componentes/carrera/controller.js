const { delete } = require('./network')
const storage = require('./storage')

function addCarrera(nombre, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.add(carrera)
        resolve(carrera)
    })
}

function getCarreras() {
    return new Promise((resolve, reject) => {
        resolve(storage.get())
    })

}
function updateCarrera(nombre, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.update(carrera)
        resolve(carrera)
    })
}

function deleteCarrera() {
    return new Promise((resolve, reject) => {
        storage.detete(nombre)
        resolve(nombre)
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    deleteCarrera,
    updateCarrera,
}