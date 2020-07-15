const Ariel = {
    name: "Ariel",
    lastname: "Monterroso",
    age: 24
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

 
const isOlder = ({age}) => age >= 18;

let people = [Ariel,Andry,Daira];

console.log(people.filter(isOlder));
