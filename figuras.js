//#region Código del cuadrado.
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.log(`El área del cuadrado es: ${areaCuadrado(5)} cm2`);
console.groupEnd();
//#endregion

//#region Código del triángulo.
console.group("Triángulo");
function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base)
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();
//#endregion

//#region  Código del círculo.
console.group("Círculos");
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetrosCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI; 
}
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.groupEnd();
//#endregion

//#region Cuadradro
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("result").innerHTML = `${perimetro} cm`;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("result").innerHTML = `${area} cm2`;

}
//#endregion Cuadrado

//#region Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("LadoTriangulo1").value;
    const lado2 = document.getElementById("LadoTriangulo2").value;
    const base = document.getElementById("BaseTriangulo").value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("result").innerHTML = `${perimetro} cm`;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("BaseTriangulo").value;
    const altura = document.getElementById("AlturaTriangulo").value;
    const area = areaTriangulo(base, altura);
    document.getElementById("result").innerHTML = `${area} cm2`;
}
//#endregion Triangulo

//#region Triangulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio").value;
    const perimetro = perimetrosCirculo(radio);
    document.getElementById("result").innerHTML = `${perimetro} cm`;
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio").value;
    const area = areaCirculo(radio);
    document.getElementById("result").innerHTML = `${area} cm2`;
}
//#endregion Triangulo