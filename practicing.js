const mayorEdad = 18;

 const Ariel = {
     name: "Ariel",
     lastname: "Monterroso",
     age: 17
 };

 const Andry = {
    name: "Andry",
    lastname: "Mazariegos",
    age: 22
};

const Daira = {
    name: "Daira",
    lastname: "Monterroso",
    age: 10
};

const isOlder = ({ age}) => age >= mayorEdad;

function isOlderOrLess(person) {

    if (isOlder(person)) {
        console.log("Acceso Autorizado");
        
    }
    else if (!isOlder(person)) {
        console.log("Acceso denegado");
    }
    
};

isOlderOrLess(Ariel);