const characters = [ 'Punisher', 'Venom', 'Deadpool', 'Carnage' ];

// const [ p3, p2, p1 ] = characters;
const [ , p2, p1 ] = characters;  // dejando en blanco el indice, se omite el valor, y pasa ala siguiente

console.log( p2, p1 );

const returnArray = () => {
    return ['ABC', 1234 ]
}

const [ letras, numeros ] = returnArray();
console.log( letras, numeros );


// tarea
const useState = ( value ) => {
    return [ value, () => { console.log('Hola mundano') } ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const arr = useState( 'Goku' );
console.log( arr );