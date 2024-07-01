/* Forma 1 de asignarle texto a etiquetas, en este caso el h1 y p
let titulo = document.querySelector('h1'); //Selecciona el elemento "h1" (conectando JavaScript con los elementos que hay en html a traves del document, es como establecer un puente, el cual permite trabajar con metodos)
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

//**la funcion es un proceso que realiza una tarea
*/

/* FUNCIONES */ //parte docuementada
/*function verificarIntento() { //esto es un evento (onclick)
    alert('clic desde el botón');
    return; //No todas las funciones retornan, por ello no es necesario color la palabra return pero se coloca (solo la palabra return) como parte de las buenas practicas de programación
    //la palabra return se utiliza para especificar el valor que la funcion debe devolver después de ser ejecutada
} 
*/

/* CAPTURANDO EL VALOR DEL INPUT */
function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //no es el objeto, es el valor del imput, por eso se utiliza getById y al final .value para llamar el id
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); // esta condición retorna un valor boleano, es decir true o false
    //los tres igual hace una comparación tanto en valor como en tipo de dato (string o numerico), es decir, debe ser igual tanto en valor como en tipo de dato.
    return;
} 

/* Forma 2 de asignarle texto a etiquetas, en este caso el h1 y p mediante una FUNCION para despues mandarla a llamar*/
// Parametro= el comportamiento de la funcion va a modificar de acuerdo a lo que resiva. (No importa en que lugar del código se manda a llamar una función, js las lee primero)

function asignarTextoElemento (elemento, texto) { //lo que esta en parantesis son los parametros. La primera (elemento) se refiere a la etiqueta (h1), el segundo (texto) se refiere al texto que se le asignara a dicha etiqueta, funcinan como variables
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

/* Mandando a llamar la función */
asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 100');

/* Creando la función para que genere el numero secreto aleatorio */

let numeroSecreto = GenerarNumeroSecreto();

function GenerarNumeroSecreto() {
    return Math.floor(Math.random() * 10)+1; // let numeroSecreto = Math.floor(Math.random() * 10)+1; // no es necesario crear una varible, en su lugar se crea fuera de la funcion y como valor, esta función
                                            // return numeroSecreto; // Aqui si tiene un valor que retornar, y se coloca el valor que va a retornar, siempre y cuando este dentro de la función
}


