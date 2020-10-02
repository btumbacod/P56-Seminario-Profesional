const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    cedula: {
        type: String,
        require: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    correo: {
        type: String,
        require: true,
    }
})

const model = mongoose.model('Estudiante', mySchema)
module.exports = model