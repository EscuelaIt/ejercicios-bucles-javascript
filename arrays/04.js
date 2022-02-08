// Dada una cadena cualquiera, separar las palabras de esa cadena en casillas del array. 
// Las palabras tendremos en cuenta cualquier cosa separada por un espacio en esa cadena. 
// Hacer el ejercicio con y sin el método slit() de las cadenas.

var cadena = "esto es una cadena";
var palabras = [];
var actual = "";
for(var i = 0; i < cadena.length; i++) {
    if(cadena[i] != ' ') {
       actual += cadena[i];   
    } else {
        if(actual != '') {
            palabras.push(actual);
            actual = '';
        }
    }
}
if(actual != '') {
    palabras.push(actual);
}

console.log(palabras);

var c2 = cadena.split(" ");
console.log(c2);