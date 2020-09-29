const express = require('express')
const carrera = require('../componentes/carrera/network')

const routes = function (server) {
    server.user('/carrera', carrera)
}

module.express = routes