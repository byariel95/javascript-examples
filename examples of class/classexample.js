function Person(name, lastname,age) {
    this.name = name,
    this.lastname = lastname,
    this.age = age
 }


Person.prototype.sayHello = function () {             // with arrow function the "this" point to  principal object and not to the function  than  call it 
    console.log(`Hello my name is ${this.name} ${this.lastname}`)
}

let Ariel = new Person('Ariel','Monterroso',24);

Ariel.sayHello();