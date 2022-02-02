// Construir la cadena del ejercicio anterior, pero colocando todos los números separados por un guión (2-4-6-8). Luego mostrar esa cadena.

var cadena = "";
for(var i = 0; i <= 9; i++) {
    if(i % 2 === 0) {
        if(i > 0) {
            cadena += "-";
        }
        cadena += i;
    }
}
console.log(cadena);

var numeros = [];
for(var i = 0; i <= 9; i++) {
    if(i % 2 === 0) {
        numeros.push(i);
    }
}
var cadena = numeros.join("-");
console.log(cadena);