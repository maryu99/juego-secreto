// 1. lista vacia
//let listaVacia = [];

// 2. Lista lenguajes de programación
/*
let listaLenguajeDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//console.log(listaLenguajeDeProgramacion);

//3. Agrega a la lista "lenguajesDeProgramacion" los elementos Java, Ruby y GoLand
listaLenguajeDeProgramacion.push('Java', 'Ruby', 'GoLand');
console.log(listaLenguajeDeProgramacion);
*/
//4. Crea una función que muestre en la consola todos los elementos de la lista en lista
/*
function elementosDeLista() {
    for(let i = 0; i < listaLenguajeDeProgramacion.length; i++) {
        console.log(listaLenguajeDeProgramacion[i]);
    }
}
console.log(elementosDeLista());
*/

// 5. rea una función que muestre en la consola todos los elementos de la lista en lista en orden inverso
/*
function elementosDeLista() {
    listaLenguajeDeProgramacion.reverse();
    for(let i = 0; i < listaLenguajeDeProgramacion.length; i++) {
        console.log(listaLenguajeDeProgramacion[i]);
    }
}
console.log(elementosDeLista());
*/
//Solución del profesor
/*
function elementosDeLista() {
    for(let i = listaLenguajeDeProgramacion.length - 1; i >= 0 ; i--) {
        console.log(listaLenguajeDeProgramacion[i]);
    }
}
console.log(elementosDeLista());
*/

// 6. función que calcula el promedio de los elementos en una lista de números // crea una función que calcule la media de los elementos en una lista de numeros.
/*
function calcularMedia (lista) {
    let suma = 0;

    for(let i = 0; i < lista.length; i++) {
        suma += lista[1];    
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Media', media);
*/

//7. Crea una función en la consola el número mayor y menor en una lista
/*
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}
let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
*/

// 8. Crea una función que retorne la suma de todos los elementos en una lista.
/* 
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) { //se va a repetir la cantidad de veces del tamaño del arreglo y en cada repetición
        suma += lista[i]; //va sumar los elementos
    }
    return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
*/

// 9. Crea una funcion que reciba una lista como parametro y retorne el indice de un elemento también pasado como parametro. Si ese elemento no existe en la lista, retorna -1, 
// si existe devolver el número de posicion en el que se ecuentra.
/*
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            return i; // Retorna el índice del elemento encontrado 
        }
    }
    return -1; //retorna -1 si el elemento no se encuentra en la lista.
}

let numeros = [2, 4, 6, 8];
let numeroFuncion = 8;
let resultado = encontrarIndiceElemento(numeros, numeroFuncion);
console.log(resultado);
*/