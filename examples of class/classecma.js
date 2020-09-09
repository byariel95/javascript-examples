class Persona {

constructor(nombre, apellido ,edad){
   this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

saludar (fn) {

    let nombre = this.nombre;
    let apellido = this.apellido;
    console.log(`Hello my name is ${nombre} ${apellido}`)
    if (fn) {
        fn(nombre,apellido,false)
    }
}

soyMayor () {
    return this.edad >= 10 ? `soy mayor y me llamo ${this.nombre}` : `soy menor y me llamo ${this.nombre}` 
}

};

class Desarrollador extends Persona {

    constructor(nombre, apellido ,edad){
       super(nombre,apellido,edad)
    }
    
    saludar (fn) {
        let {nombre,apellido} = this
        console.log(`Hello my name is ${nombre} ${apellido} and I'm a developer`)
        if (fn) {
            fn(nombre,apellido,true)
        }
    }
    
    
};
    
 function responderSaludo (nombre , apellido, esdev ){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esdev){
        console.log(`ahah sos un crack`)
    }
 }

let Ariel = new Persona('Ariel','Monterroso',24);
let Andry = new Desarrollador('Andry','Mazariegos',22);
let milli = new Persona('Mildred','Garcia',22);

Ariel.saludar(responderSaludo);
Andry.saludar(responderSaludo);
milli.saludar();

console.log(Ariel.soyMayor());