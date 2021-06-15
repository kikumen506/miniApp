// Desestructuracion

const persona = { 
    nombre: 'Kike',
    edad: 30,
    clave: 'Developer',
    
};

// const { nombre, edad, clave } = persona;

// console.log( nombre, edad, clave );

// tambien se puede usar el destructuring en los argumentos de las funciones, tambien se pueden añadir valores.
// si existe el valor en el objeto, usa ese valor, si no, usa el que le pasamos por parametro.
const useContext = ( { nombre, edad, clave, rango = 'Junior'} ) => {

    console.log( nombre, edad, rango, clave );
    return {
        nombreClave: clave,
        years: edad,
        latlng: {
            lat:12,
            lng: 23
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, years, latlng:{ lat, lng }} = useContext( persona );
// destructuring de multiples elementos dentro del array
console.log( nombreClave, years );
console.log( lat, lng );