
const max = 591;
const min = 1;
let characters = Math.round(Math.random()*(max-min)+min);
const ApiUrl = `https://rickandmortyapi.com/api/character/${characters}`;

const getCharacters = async () => {

    const req = await fetch(ApiUrl);
    const  { name} = await  req.json();
    
   // document.getElementById('contenido').innerHTML = body.name;
    console.log(name);

}

getCharacters();
