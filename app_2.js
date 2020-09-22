const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i]
    }
    return acumulado
}


const numeros = [1, 2, 3, 4, 5];

//multiplicar * 2

// mult = numeros.map(x => x * 2);
// console.log(mult);

// tuplas

// tuplas = numeros.map(x => [x, x]);
// console.log(tuplas)

// edad promedio 


const mascotas = [
    { nombre: "lynda", edad: 4, raza: "perro"},
    { nombre: "chanchito feliz", edad: 3, raza: "perro"},
    { nombre: "pulga", edad: 10, raza: "perro"},
    { nombre: "lunita", edad: 2, raza: "gato"}
];

edades = mascotas.map( x => x.edad); 
console.log(edades);

total= suma(edades);
console.log(total);
console.log(total / edades.length)