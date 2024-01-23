let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo  = 10;
// esta se inicializan en la funcion condicionesIniciales();
// control +f ayuda a buscar incluso reemplazar


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); // document es solamente un puente de app.js con el html llamado index
    elementoHtml.innerHTML = texto;
    return;

}

function verificarIntento(){// esta funcion captura el numero digitado por el usuario
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);// el input es una etiqueta de html y esta representando la cajita de texto
    // el input se cambio por la información que tiene su id
    if(numeroUsuario === numeroSecreto){// los 3 = es para comparar que sean el mismo tipo de dato y si es igual
       // asignarTextoElemento('p',`Felicidades acertaste :D en ${intentos} ${(intentos===1) ? ' vez' : ' veces'}`);
        asignarTextoElemento('p','Felicidades acertaste :D en '+intentos +((intentos===1) ? ' intento' : ' intentos'));
        document.getElementById('reiniciar').removeAttribute('disabled');// esto es para habilitar el boton de juego nuevo

    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero es menor ');
    }   else if(numeroUsuario<numeroSecreto){
            asignarTextoElemento('p','El numero es mayor ');
    }
        intentos++;
        limpiarCaja();
    }
    return;
    // el parseInt es para cambiar el dato a un tipo Int 
}
function limpiarCaja(){// # es para referirse a la id del elemento
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya utilizamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
         // si esl numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){// lo que hace el includes es recorrer la lista y ver si el numero ya existe
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

   
}
function condicionesInicales(){
    asignarTextoElemento('h1','El numero Secreto');
    asignarTextoElemento('p', 'Escoge un numero del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar mendaje del 1-10
    // volver a generar numero aleatorio
    // inicializar el numero de intentos 
    condicionesInicales();// 3 en 1 :v
    // desabilitar boton de nevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // esto en vez de quitar agrega que se vuelva a desabilitar el boton de nuevo juego
    // por eso tiene dos parametos que son 'disabled', 'true' y arriba digo que es el #

}
condicionesInicales();

