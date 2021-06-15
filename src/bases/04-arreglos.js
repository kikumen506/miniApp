// Arreglos en js
// const arreglo = new Array( 100 );
const arreglo = [ 1, 2, 3, 4 ];

// arreglo.push( 1 );
// no debemos usar el metodo push porque modifica el objeto


// hacemos uso del operador spread, mejor que push para añadir valores a los arreglos.
let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function( numero ){
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );