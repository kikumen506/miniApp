const someOne = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Malibu',
        zip: 39393,
        lat: 12.3231,
        lng: 34.543,
    }
};

const someOne2 = { ...someOne };
someOne2.nombre = 'Bruce';
someOne2.apellido = 'Banner'

console.log( someOne );
console.log( someOne2 );