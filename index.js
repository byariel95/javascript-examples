
const methods = require('./firstModule');
const { addition,rest } = require('./secondModule');
const { myAge, myBirthday} = require('./thirdModule');

const person = {
    name: 'Ariel',
    lastName: 'Monterroso',
    age: 24,
    ocupation: 'Engenier'
};


function main() {
    // from module 1
    methods.getAge(person);
    methods.getLastName();

    // from module 2
    addition(25,17);
    rest();

    // from module 3
    myAge(24);
    myBirthday();



}

main();

