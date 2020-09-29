
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola soy ${nombre}`)
            resolve(nombre)
        }, 1000)
    })
}

function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('blaaaaaaaaaaa')
            resolve(nombre)
        }, 1000)
        
    })
}

function adios() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adios: ${nombre}`)
            resolve(nombre)
        }, 1000)

    })

}

console.log('Inicializando')
hola('Bryan')
    .then((nombre) => hablar(nombre))
    .then((nombre) => hablar(nombre))
    .then((nombre) => hablar(nombre))
    .then((nombre) => adios(nombre))
    .catch((error) => console.error(error))