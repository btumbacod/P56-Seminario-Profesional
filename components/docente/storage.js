const model = require('./model')

function addDocente(objeto) {
    const docente = new model(objeto)
    docente.save()
}

async function getDocente(filtroDocente) {
    let filtro = {}
    if (!filtroDocente != null) {
        filtro = { nombre: filtroDocente }
    }
    const docenteList = await module.find(filtro)
    return DocenteList
}

async function updateDocente(idDocente, objeto) {
    const foundDocente = await model.findOne({ _id: idDocente })

    foundCarrera.nombre = objeto.nombre
    foundCarrera.apellido = objeto.apellido
    foundCarrera.correo_electronico = objeto.correo_electronico

    const result = await foundDocente.save()
    return result
}

function deleteDocente(idDocente) {
    return model.deleteOne({ _id: idDocente })
}

module.exports = {
    add: addDocente,
    get: getDocente,
    update: updateDocente,
    delete: deleteDocente,
}