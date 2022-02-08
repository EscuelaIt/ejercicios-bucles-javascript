// Hacer un algoritmo que cree una contraseña aleatoria, compuesta de 
// 1) Un número variable de caracteres entre 8 y 12. 
// 2) Al menos un caracter numérico. 
// 3) Al menos un caracter de letra minúscula. 
// 4) Al menos un caracter de letra mayúscula.

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lettersLowerCase = [];
for(var i = 0; i < letters.length; i++) {
    lettersLowerCase.push(letters[i].toLowerCase());
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getPasswordItem() {
    var option = random(1, 3);
    switch(option) {
        case 1: 
            return random(0, 9);
        case 2:
            return letters[random(0, letters.length - 1)];
        default:
            return letters[random(0, letters.length - 1)].toLowerCase();
    }
}

function hasNumber(input) {
    for(var i = 0; i < input.length; i++) {
        if(! isNaN(input[i])) {
            return true;
        }
    }
    return false;
}

function hasLowerCase(input) {
    for(var i = 0; i < input.length; i++) {
        if(lettersLowerCase.includes(input[i]) ) {
            return true;
        }
    }
    return false;
}

function hasUpperCase(input) {
    for(var i = 0; i < input.length; i++) {
        if(letters.includes(input[i]) ) {
            return true;
        }
    }
    return false;
}


function changeStringIndex(initialString, index, newValue) {
    var finalString = '';
    for(var i = 0; i < initialString.length; i++) {
        if(i == index) {
            finalString += newValue;
        } else {
            finalString += initialString[i];
        }
    }
    return finalString;
}

function generarClaveAleatoria() {
    var password = '';
    
    var numCharacters = random(8, 12);
    for(var i = 1; i <= numCharacters; i++) {
        password += getPasswordItem();
    }
    while(! isValidPassword(password)) {
        if(! hasNumber(password)) {
            console.log('en', password, 'no hay un numero');
            password = changeStringIndex(password, random(0, password.length - 1), random(0,9));
        }
        if(! hasLowerCase(password)) {
            console.log('en', password, 'no hay una letra en minúscula');
            password = changeStringIndex(password, random(0, password.length - 1), lettersLowerCase[random(0, lettersLowerCase.length - 1)]);
        }
        if(! hasUpperCase(password)) {
            console.log('en', password, 'no hay una letra en mayúscula');
            password = changeStringIndex(password, random(0, password.length - 1), letters[random(0, letters.length - 1)]);
        }
    }
    return password;
}

function isValidPassword(input) {
    return hasNumber(input) && hasLowerCase(input) && hasUpperCase(input);
}

console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
console.log(generarClaveAleatoria());
