// funciones


// funcion normal
const saludar = function( nombre ){
    return `Hola: ${nombre}`
};

// funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola: ${nombre}`
};

// funcion de flecha simple
const saludar3 = ( nombre ) => `Hola: ${ nombre }`; 

// funcion de flecha sin argumentos
const saludar4 = () => `Hola Mundano`; 

console.log( saludar( 'Jorge' ));
console.log( saludar2( 'Jordi' ));
console.log( saludar3( 'Raul' ));
console.log( saludar4());

const getUser = () => 
       ({uid: 'ABC123',
        usarname: 'test_User'})


const user = getUser();
console.log( user );



// tarea
const getActiveUser = ( nombre ) => ({ uid: 'ABF234', username: nombre });

const activeUser = getActiveUser( 'Fernando' );
console.log( activeUser );