const Ariel = {
    name: "Ariel",
    lastname: "Monterroso",
    age: 24,
    height: 1.58
};

const Andry = {
   name: "Andry",
   lastname: "Mazariegos",
   age: 22,
   height: 1.56
};

const Daira = {
   name: "Daira",
   lastname: "Monterroso",
   age: 10,
   height: 1.50
};

const Andrea = {
    name: "Andrea",
    lastname: "Maldonado",
    age: 20,
    height: 1.55

 };

 const Josue = {
    name: "Josue",
    lastname: "Perez",
    age: 19,
    height: 1.58
 };

 const convertHeight = person => ({
      ...person,
      height: person.height * 100

  /*return { 
      ...person,
      height: person.height * 100
  }*/
 });


let originalArray = [Andry,Ariel,Andrea,Daira,Josue];

 const newArray = originalArray.map(convertHeight);

 console.log(originalArray);
 console.log(newArray);