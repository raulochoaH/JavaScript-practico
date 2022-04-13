<<<<<<< HEAD
// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();



// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base)
  {
    return Number(lado1) + Number(lado2) + Number(base);
};


 function areaTriaungulo(base, altura){
        return (base * altura) / 2;

};

console.groupEnd();



// Código del círculo
console.group("Círculo");

// Radio


// Diámentro
function diametroCirculo(radio) {
    return radio *2;
};


// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interectuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){

    const izquierdo = document.getElementById("izquierdo");
    const derecho = document.getElementById("derecho");
    const base = document.getElementById("base");

    const value1 = izquierdo.value;
    const value2 = derecho.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const altura = document.getElementById("Altura");

    const value1 = base.value;
    const value2 = altura.value;
    
    const area = areaTriaungulo(value1, value2);
    alert(area);

};








=======
// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();



// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base)
  {
    return Number(lado1) + Number(lado2) + Number(base);
};


 function areaTriaungulo(base, altura){
        return (base * altura) / 2;

};

console.groupEnd();



// Código del círculo
console.group("Círculo");

// Radio


// Diámentro
function diametroCirculo(radio) {
    return radio *2;
};


// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interectuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){

    const izquierdo = document.getElementById("izquierdo");
    const derecho = document.getElementById("derecho");
    const base = document.getElementById("base");

    const value1 = izquierdo.value;
    const value2 = derecho.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const altura = document.getElementById("Altura");

    const value1 = base.value;
    const value2 = altura.value;
    
    const area = areaTriaungulo(value1, value2);
    alert(area);

};








>>>>>>> b898a3dc632007140fc00c4a569931408e1006b4
