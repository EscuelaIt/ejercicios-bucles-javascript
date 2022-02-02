// Construir una cadena como en el ejercicio anterior, pero que tenga los números del 0 al 9, pero solamente aquellos que son pares. Luego mostrar la cadena.

var cadena = "";
for(var i = 0; i <= 9; i++) {
    if(i % 2 === 0) {
        cadena += i;
    }
}
console.log(cadena);