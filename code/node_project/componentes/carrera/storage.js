const list = []

function addCarrera(objeto) {
    list.push(objeto)
}

function getCarreras() {
    return list
}

function updateCarrera(objeto) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].nombre == objeto.carrera) {
            list[i] = objeto
        }
    }

}

function deleteCarrera() {
    for (let i = 0; i < list.length; i++) {
        if (list[i].nombre == objeto.carrera) {
            delete list[i]
        }
    }
}

module.exports = {
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    detete: deleteCarrera,
}