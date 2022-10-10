const cuadrado = document.getElementById("cuadrado");
const estiloDelCuadrado = getComputedStyle(cuadrado);

// Valores para el reset

const topInicial = "140px";
const left_inicial = "385px";

let posicionTop = parseInt(estiloDelCuadrado.top);
let posicionleft = parseInt(estiloDelCuadrado.left);

function moverArriba(){
    posicionTop = posicionTop - 10;
    cuadrado.style.top = posicionTop + "px";
}

function moverAbajo(){
    posicionTop = posicionTop + 10;
    cuadrado.style.top = posicionTop + "px";
}

function moverIzquierda(){
    posicionleft = posicionleft - 10;
    cuadrado.style.left = posicionleft + "px";
}

function moverDerecha(){
    posicionleft = posicionleft + 10;
    cuadrado.style.left = posicionleft + "px";
}

function restart(){
    cuadrado.style.left = left_inicial;
    cuadrado.style.top = topInicial;

    posicionTop = 140;
    posicionleft =385;
}


