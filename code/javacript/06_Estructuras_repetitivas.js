var persona = {
    Nombres: 'Bryan Alexander',
    Apellidos: 'Tumbaco Duarte',
    peso: 140,
}

const IncrementarPeso = 3
const DecrementarPeso = 2

const aumentarPeso = (objeto) => objeto.peso += IncrementarPeso
const disminuyePeso = (objeto) => objeto.peso -= DecrementarPeso

const comeMucho = () => Math.random() < 0.7
const realizaDeporte = () => Math.random() < 0.2

const META = persona.peso - 10

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}`)


while (persona.peso > META) {
    if (comeMucho()) {
        aumentarPeso(persona)

    }
    if (realizaDeporte()) {
        disminuyePeso(persona)
    }
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso}`)