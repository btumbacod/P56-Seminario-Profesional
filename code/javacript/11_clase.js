function heredeDe(prototipoHijo, prototipoPadre) {
    var fn = function () { }
    fn.prototype = prototipoPadre.prototype

    //prototipos del padre
    prototipoHijo.prototype = new fn
    //con esto apunto al contructor del prototipo hijo
    prototipoHijo.prototype.contructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.altura = altura
}

function Deportista(nombre, apellido) {
    this.nombre = nombre,
        this.apellido = apellido
}

heredeDe(Deportista, Persona)

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}

Persona.prototype.saludar2 = (nombre, apellido) => {
    console.log(`Prueba2 : Hola soy ${nombre} ${apellido}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.70) {
        console.log(`mi altura es: ${this.altura} `)
    } else {
        console.log(`mi altura es: ${this.altura} `)
    }

}

Deportista.prototype.saludar = function () {
    console.log(`Hola soy Deportista ${this.nombre} ${this.apellido}`)

}

var objeto1 = new Persona('Bryan', 'Tumbaco', '1.69')
objeto1.saludar()
var objeto2 = new Deportista('Alexander', 'Tumbaco2')
objeto2.saludar2(objeto2.nombre, objeto2.apellido)
objeto2.saludar()
objeto1.soyAlto()