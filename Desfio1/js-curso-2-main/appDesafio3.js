// 1. IMC
/*
function masaCoorporal(altura, peso) {
    return peso / (altura * altura);
}

let imc = parseInt(masaCoorporal(1.50, 55));
console.log(imc);
*/

// 2. Valor factorail de un número / X
/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
*/

// 3. dolar a peso mexicano
/*
function dolaresAPesos(dolar) {
    let ValorDolar = 4.80;
    let peso = dolar * ValorDolar;
    return peso;
}

let dolares = 50;
let valorEnPesos = dolaresAPesos(dolares)
console.log(`${dolares} dólares es $MX ${valorEnPesos}`);
*/

// 4. área y perimetro de una sala rectangular, la altura y ancho se proporcionara como parametro
/*
function areaPerimetroRectangular(altura, ancho) {
    var areaSala = altura * ancho;
    var perimetroSala = (altura * 2) + (ancho * 2);
    console.log(`El área de una sala que mide ${altura} de altura y ${ancho} de ancho es: ${areaSala} y el perimetro es ${perimetroSala}`);
}

console.log(areaPerimetroRectangular(5, 4));
*/

// 5. area y perimetro de una sala circular  //perimetro = pi * diametro - area pi * r2 - radio es la mitad del diametro
/*
function areaPerimetroCircular(diametro, radio) {
    let pi = 3.14;
    let area = pi *(radio*radio);
    let perimetro = pi * diametro;
    console.log(`El área de un circulo que tiene de radio ${radio} es ${area} y el perimetro es ${perimetro}`);
}

console.log(areaPerimetroCircular(6, 3));  //28.26, 18.84
*/

// 6. Tabla de multiplar de un número dado como parametro (que digite el usuario). // medio

function tablaMultiplicar(numero) {
    for(i = 1; i <= 10; i++) {
        let multiplar = numero * i;
        console.log(`${numero} X ${i} = ${multiplar}`);
    }
}
console.log(tablaMultiplicar(5));