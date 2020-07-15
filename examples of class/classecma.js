class Persona {

constructor(nombre, apellido ,edad){
   this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

saludar () {
    console.log(`Hello my name is ${this.nombre} ${this.apellido}`)
}

soyMayor () {
    return this.edad >= 10 ? `soy mayor y me llamo ${this.nombre}` : `soy menor y me llamo ${this.nombre}` 
}

};

class Desarrollador extends Persona {

    constructor(nombre, apellido ,edad){
       super(nombre,apellido,edad)
    }
    
    saludar () {
        console.log(`Hello my name is ${this.nombre} ${this.apellido} and I'm a developer`)
    }
    
    
};
    


let Ariel = new Persona('Ariel','Monterroso',24);
let Andry = new Desarrollador('Andry','Mazariegos',22);

Ariel.saludar();
Andry.saludar();
console.log(Ariel.soyMayor());