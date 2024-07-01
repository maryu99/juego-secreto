//Arreglos (listas, las listas pueden ser de tipo string, numerico o combinado)

let numerosSorteados = []; //declarando vatiable de tipo arreglo
console.log(numerosSorteados); //mandando a llmar el arreglo  
numerosSorteados.push(5); //el elemento push agrega un elemento al final de la lista y al mismo tiempo retorna la cantidad de elementos en la lista
console.log(numerosSorteados);//ahora va a mostrar [5] en consola.
numerosSorteados.push(8);
console.log(numerosSorteados); //ahora va a mostrar "(2) [5, 8] " en consola.
console.log(numerosSorteados.length); //pedir tamaño del arreglo
//los arreglos cuentan las posiciones a partir de 0 no de 1
console.log(numerosSorteados[0]); //accediedo a un elemento en particular, para ello se encierra en corchetes la posición del elemento (en este caso la posición 0 es el 5)
//para poder saber la ultima posción del arreglo (en caso de que el arreglo sea bastante extenso)
console.log(numerosSorteados[numerosSorteados.length-1]);
