exports.getAge = (person) => {
 
    const mayoriaDeEdad = 18
    
    if (person.age >= mayoriaDeEdad)
    {
        console.log(`hello ${person.name} you have ${person.age} years old`);
    }else{
        console.log(`hello ${person.name} you aren't ${person.age} years old`);
    }          

};

exports.getLastName = () => {
 
    console.log('and my last name is Monterroso');

};
