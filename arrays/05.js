// Para un array de un listado de ciudades, que las devuelva ordenadas, 
// haciendo tu propio algoritmo de ordenación inventado. 
// No usar el método sort() de los arrays. 
// Se puede usar este array con ciudades: ["Madrid", "Oviedo", "Valencia", "León", "Barcelona", "Sevilla", "Granada"]

var ciudades = ["Madrid", "Alava", "Oviedo", "Valencia", "León", "Barcelona", "Sevilla", "Granada"];

function moveToEnd(item, arrayInicial) {
    var arrayFinal = [];
    for(var i = 0; i < arrayInicial.length; i++) {
        if(arrayInicial[i] != item) {
            arrayFinal.push(arrayInicial[i]);
        }
    }
    arrayFinal.push(item);
    return arrayFinal;
}

function isInOrder(inputArray) {
    for(var i = 0; i < inputArray.length - 1; i++) {
        if(ciudades[i] > ciudades[i + 1]) {
            //console.log(ciudades[i], 'está desordenado');
            return false;
        }    
    }
    return true;
}

while(! isInOrder(ciudades)) {
    console.log('Comienzo iteracion para orden parcial');
    for(var i = 0; i < ciudades.length - 1; i++) {
        if(ciudades[i] > ciudades[i + 1]) {
            console.log(ciudades[i] + ' es mayor que ' + ciudades[i+1]);
            ciudades = moveToEnd(ciudades[i], ciudades);
        }
    }
}

//console.log('ordenado', isInOrder(ciudades));

console.log('Acabando tengo', ciudades);

