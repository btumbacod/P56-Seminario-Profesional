var persona = {
    nombre: 'Bryan ',
    apellido: 'Tumbaco',
    edad: '23',
    universidad: 'UPS',
    correo: 'btumbacod@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimirPersona() {
    console.log(`Nombre: ${objeto.nombre} ${objeto.apellido}`)
    console.log(`edad: ${objeto.edad} `)
    console.log(`Universidad: ${objeto.universidad}`)
    console.log(`Correo: ${objeto.correo}`)
    if (objeto.ingeniero) {
        console.log(`Es ingeniero`)
    }
    if (objeto.master) {
        console.log(`Es Magister`)
    }
    if (objeto.doctor) {
        console.log(`Es Doctor`)
    }
}
imprimirPersona(persona)