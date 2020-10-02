const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new Schema({
    nombre: {
        type: String,
        require: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    correo_electronico: {
        type: String,
        require: true,
    }
})

const model = mongoose.model('Docente', mySchema)
module.exports = model
