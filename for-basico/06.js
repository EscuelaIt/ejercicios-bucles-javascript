// Mostrar los números del 10 al 50 que sean divisibles por 3

for(var i = 10; i <= 50; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

for(var i = 12; i <= 50; i += 3) {
    console.log(i);
}
