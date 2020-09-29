class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        if (this.altura > 1.70) {
            console.log(`mi altura es: ${this.altura} `)
        } else {
            console.log(`mi altura es: ${this.altura} `)
        }

    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)

    }
    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} soy deportista`)
    }
}

objeto1 = new Persona('Bryan', 'Tumbaco', 1.69)
objeto1.saludar()
objeto1.soyAlto()

objeto2 = new Deportista('Gabriela', 'Morocho')
objeto2.saludar()
objeto2.altura = 1.65
objeto2.soyAlto()