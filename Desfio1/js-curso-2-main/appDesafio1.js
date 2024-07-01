let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

function mensajeConsole() {
    console.log('El botón fue clicado');
}

function mensajePromt() {
    let preguntaCiudad = prompt('Ingrese el nombre de una ciudad en Brasil');
    alert(`Estuve en ${preguntaCiudad} y me acorde de ti`);
}

function mensajeAlert() {
    alert('Yo amo JS [Me obligarion a decirlo :( ]');
}

function sumaDeNumeros() {
    let numero1 = parseInt(prompt('Ingrese algún numero'));
    let numero2 = parseInt(prompt('Ingrese un segundo número'));
    let resultado = numero1 + numero2;

    alert(`El resultado de los numeros es ${resultado}`);
}