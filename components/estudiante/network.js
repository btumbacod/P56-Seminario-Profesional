const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function (req, res) {
    const filtroEstudiante = req.query.carrera || null
    controller.getCarreras(filtroEstudiante)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.post('/', function (req, res) {
    controller.addEstudiante(req.body.cedula, req.body.nombre, req.body.apellido, req.body.correo)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.patch('/', function (req, res) {
    controller.updateEstudiante(req.body.id_estudiante, req.body.cedula, req.body.nombre, req.body.apellido, req.body.correo)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.delete('/', function (req, res) {
    controller.deletEstudiante(req.body.id_estudiante)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

module.exports = router