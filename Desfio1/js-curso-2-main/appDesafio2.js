// 1.- Hola mundo desde la consola
/*
function saludo () {
    console.log('¡Hola mundo');
    return;
}

saludo(); // se tiene que mandar a llamar la función para que se ejecute
*/

// 2.- Crear una función que reciba como parámetro un nombre y muestre ¡Hola [nombre]! en la cosola
/*
function saludoConNombre (nombre) {
    
    console.log(`¡Hola ${nombre}!`);
    return;
}

saludoConNombre('Maribel');
*/

// 3.- crea una función que reciba un número como parámetro y devuelva el doble de ese número
/*
function dobleDeNumero (numero) {
    console.log(numero);
    console.log('El doble del ' + numero + ' es:' + numero*2);
    return;
}

dobleDeNumero(7);
*/

// 3.- Solución del profesor
/*
function calculdarDoble (numero) {
    return numero * 2;
}

let resultadoDoble = calculdarDoble(5);
console.log(resultadoDoble);
*/

// 4.- Crea una función que reciba 3 números como parámetro y devuelva su promedio
/*
function promedioDeNumeros (numero1, numero2, numero3) {
    console.log(numero1);
    console.log(numero2);
    console.log(numero3)
    let suma = numero1 + numero2 + numero3;
    let resultado = suma / 3;
    console.log(resultado);

    return;
}
promedioDeNumeros(7, 10, 10);
*/

// 4.- Solución del profesor
/*
function calcularPromedio (a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
*/

// 5.- crea una función que reciba dos nnúmeros como parámetros y devuelva el mayor de ellos
/*
function numeroMayor (numero1, numero2) {
    console.log(numero1);
    console.log(numero2);
    if (numero1 > numero2) {
        console.log(numero1)
    } else {
        console.log(numero2);
    }
    return;
}

numeroMayor(2, 10);
*/

// 5.- Solución del profesor
/*
function encontrarMayor(a, b) {
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(10, 15);
console.log(numeroMayor);
*/

// 6.- crear una función qu e reciba un número como parámetro y devuelva el resultado de multiplicar ese número por si mismo 
/*
function multiplicacion (numero) {
    console.log(numero);
    console.log(numero*numero);
    return;
}

multiplicacion(10);
*/

// 6.- Solución del profesor
/*
function cuadrado(numero) {
    return numero * numero;
}

let resultado =cuadrado(6);
console.log(resultado);
*/