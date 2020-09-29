const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function (req, res) {
    response.success(req, res, 'Lista de Carreras UPS', 200)
})

router.post('/', function (req, res) {
    if (req.query.error == 'ok') {
        response.success(req, res, 'Error al ingresar a la carrera', 500)
    } else {
        response.success(req, res, 'Ingreso de Carrera exitoso', 201)
    }
})

module.exports = router