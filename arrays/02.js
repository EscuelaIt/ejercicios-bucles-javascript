// Tomando como entrada un número cualquiera, por ejemplo 54, 
// separar en dos arrays los números pares y los impares que hay desde el 0 hasta ese número.

var entrada = 54;
var pares = [];
var impares = [];

for(var i = 0; i <=54; i++) {
    if(i % 2 == 0) {
        pares.push(i);
    } else {
        impares.push(i);
    }
}

console.log(pares);
console.log(impares);