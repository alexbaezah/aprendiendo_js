const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mascotas = [
    { nombre: "lynda", edad: 4, raza: "perro"},
    { nombre: "chanchito feliz", edad: 3, raza: "perro"},
    { nombre: "pulga", edad: 10, raza: "perro"},
    { nombre: "lunita", edad: 2, raza: "gato"}
];

// const numerosFiltrados = numeros.filter( x => x < 5);
// console.log(numerosFiltrados);

const perros = mascotas.filter(x => x.raza === "perro");
console.log(perros);

const gatos = mascotas.filter(x => x.raza === "gato");
console.log(gatos);


// filter genera un nuevo arreglo a partir de las condiciones impuestas por el método
// al guardarlo en una variable, .filter es inmutable por lo que el arreglo original no le pasa nada
// mientras que el generado con .filter es un nuevo arreglo con las condiciones impuestas en el filter
// siempre el arreglo nuevo (.filter) será más pequeño el original, se reduce