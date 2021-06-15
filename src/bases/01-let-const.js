// variables y constantes
// en React casi siempre ase usan constantes para almacenar los valores
const name = 'Hulk';

const job = 'scientist';

let diceValue = 5;
diceValue = 3;

console.log( name, job, diceValue );

if ( true ) {
    // aqui diceValue es una variable de scope, ya que solo funciona dentro de la declaracion IF
    let diceValue = 6;
    console.log( diceValue );
};
console.log( diceValue );
