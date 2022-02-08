// Generar un número aleatorio entre 0 y 10 hasta que el número sea mayor que 8. 
// Mostrar los números generados en cada iteración.

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var aleatorio;
do {
    aleatorio = random(0, 10);
    console.log(aleatorio);
} while (aleatorio <= 8);
