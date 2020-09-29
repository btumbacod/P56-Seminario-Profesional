function hola(nombre, fn_cb) {

    setTimeout(function () {
        console.log(`Hola soy ${nombre}`)
        fn_cb(nombre)
    }, 1000)

}
function hablar(fn_cb) {
    setTimeout(function () {
        console.log('Blaaaaaaaaa')
        fn_cb()
    }, 1000)
}

function adios(nombre) {
    console.log(`Adios ${nombre}`)
}

function dialogar(nombre, numVeces) {
    if (numVeces > 0) {
        hablar(function () {
            dialogar(nombre, --numVeces,)
        }, 1000)
    } else {
        adios(nombre)
        console.log('Finalizando')
    }

}

console.log('Inicializando......')

/*hola('Bryan', function () {
    console.log('Finalizando......')
})*/
hola('Bryan', function (nombre) {
    dialogar(nombre, '4')
})
