async function hablar() {
    let nombre = hola('Bryan')
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola soy ${nombre}`)
            resolve(nombre)
        }, 1000)

    })
}

async function adios() {
    let nombre = hola('Bryan')
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adios ${nombre}`)
            resolve(nombre)
        }, 1000)

    })
}

async function dialogar() {
    let nombre = await hola('Bryan')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios()
}


dialogar()