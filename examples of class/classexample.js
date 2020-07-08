function Person(name, lastname) {
    this.name = name,
    this.lastname = lastname
 }


Person.prototype.sayHello = () =>{ 
    console.log(`Hello my name is ${this.name} ${this.lastname}`)
}

let Ariel = new Person('Ariel','Monterroso');

