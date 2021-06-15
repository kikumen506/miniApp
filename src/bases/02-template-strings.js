const fullName = 'Hulk';

const job = 'scientist';

// concatenacion de strings antigua
// const fullName = name +' '+ job;

// concatenacion de string mediate los template Strings
const nameData = `${ fullName } ${ job }`;


console.log( nameData );


function getGreetings( fullName) {
    return 'Hola desde React: Bienvenido ' + fullName;
}

console.log( `${ getGreetings( fullName ) }` );
