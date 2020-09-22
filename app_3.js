// funcion reducer
// const reducer = (acumulador, valorActual) => nuevoAcumulador

// const reducido = [].reduce((acc, el)) => acc + el, 0 

const numeros = [1, 2, 3, 4, 5];

const total = numeros.reduce((ac, el) => ac + el, 0)
console.log(total);

const mascotas = [
    { nombre: "lynda", edad: 4, raza: "perro"},
    { nombre: "chanchito feliz", edad: 3, raza: "perro"},
    { nombre: "pulga", edad: 10, raza: "perro"},
    { nombre: "lunita", edad: 2, raza: "gato"}
];

// para cbjetos con reduce, acá indexa los objetos a través de una llave, sea nombre, edad o raza
const indexed = mascotas.reduce((ac, el) => ({
    ...ac,                                        // -> genera copia del acumulador
    [el.nombre]: el,                              // --> genera una llave
}), {})

console.log(indexed["lynda"]);

const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((ac, el) => ac.concat(el), []);
console.log(plano);