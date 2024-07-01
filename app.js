let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroDeVeces = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Activar el boton "Nuevo juego" cuando acierte el número
    } else {
        //EL usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); //lamando la funcion para limpiar la caja, se coloca al final de la condición cuando el usuario no acerta
    }
    return;
}

function limpiarCaja() {
    //forma 1 de limpiar la caja 
    /* let valorCaja = document.querySelector('#valorUsuario'); //se puede usar el querySelector para llamar una id, pero al inicio debe llevar #
     valorCaja.value = "";  */

    //forma 2 y más reducido (recomendada)
    document.querySelector('#valorUsuario').value = "";
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el número generado esta en la lista hago algo  
        if (listaNumerosSorteados.includes(numeroGenerado)) { //includes = verifica en el arreglo si algún elemento ya existe y devuelve un bloenao (true o false)
            return GenerarNumeroSecreto(); //la función se manda a llamar ella misma // retorna la función para volcer a iniciar
        } else { //sino me comporto como vengo haciendolo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; // vuelve al if
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de númreos
    //generar el número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //setAttribute se le asigna dos parametros, el atribro al que se le quiere hacer cambio (disabled) y el valor al que se quiere cambiar (true) // quita esto y coloca esto con tal valor
}

condicionesIniciales();


    //si yA jugo 3 veces
/*
    if (intentos == numeroDeVeces) {
        asignarTextoElemento('p', 'Solo puede jugar 3 veces');
    } else {

    }
*/