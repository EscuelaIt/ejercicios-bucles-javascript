// Dada una cadena cualquiera, por ejemplo "esto es una cadena", 
// separar los caracteres de esa cadena en casillas de un array. 
// Nota: hacer el ejercicio con y sin el método split() de las cadenas.

var cadena = "esto es una cadena";
var caracteres = [];
for(var i = 0; i < cadena.length; i++) {
    caracteres.push(cadena[i]);
}
console.log(caracteres);

var c2 = cadena.split("");
console.log(c2);