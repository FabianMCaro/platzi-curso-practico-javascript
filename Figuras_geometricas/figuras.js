// Codigo del cuadrado 
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrada(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(laso1, lado2, base){
    return laso1 + lado2 +base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: "+ radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: "+ PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();


//aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const entrada = document.getElementById("InputCuadrado");
    const valor = entrada.value;
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const entrada = document.getElementById("InputCuadrado");
    const valor = entrada.value;
    const area = areaCuadrada(valor);
    alert(area);
}

// triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloL1"); 
    const lado2 = document.getElementById("InputTrianguloL2");
    const base = document.getElementById("InputTrianguloB");
    const valorL1 = Number(lado1.value);
    const valorl2 = Number(lado2.value);
    const valorB = Number(base.value);
    const perimetro = perimetroTriangulo(valorL1, valorl2, valorB);
    alert(perimetro); 
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloB");
    const altura = document.getElementById("InputTrianguloAl");
    const valorB = Number(base.value);
    const valorAl = Number(altura.value);
    const area = areaTriangulo(valorB, valorAl);
    alert(area);
}

// Circulo

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valorR = Number(radio.value);
    const perimetro = perimetroCirculo(valorR);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valorR = Number(radio.value);
    const area = areaCirculo(valorR);
    alert(area);
}


// reto 1: Triangulo isosceles

function verificar (lado1, lado2, base){
    if(lado1 === lado2 ){
        const baseM = base / 2;
        const ladoC = lado2 * lado2;
        const baseC = baseM * baseM;
        const altura = Math.sqrt(ladoC-baseC);
        alert("La altura del triangulo isosceles es: "+ altura);
    }else{
        alert("El lado 1 y el lado 2 del triangulo no son iguales!!!");
    }
}



function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("TrianguloLado1");
    const lado2 = document.getElementById("TrianguloLado2");
    const base = document.getElementById("TrianguloBase");
    const valorL1 = Number(lado1.value);
    const valorL2 = Number(lado2.value);
    const valorBa = Number(base.value);

    verificar(valorL1, valorL2, valorBa);
}