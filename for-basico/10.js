// Multiplicar por 7 un número creciente, comenzando por el 1, (1x7, 2x7, 3x7...) y mostrar el resultado de esa multiplicación. Parar cuando el valor valor de la multiplicación sea mayor que 1000.

for(var i = 1; i * 7 < 1000; i++) {
    console.log(i * 7);
}

for(var i = 1; i < 1000; i++) {
    if(i * 7 > 1000) {
        break;
    }
    console.log(i, i * 7);
}

var i = 1;
while(i * 7 < 1000) {
    console.log(i * 7);
    i++;
}