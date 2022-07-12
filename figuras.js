//Código del cuadrado.
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.log(`El área del cuadrado es: ${areaCuadrado(5)} cm2`);
console.groupEnd();


//Código del triángulo.
console.group("Triángulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    (base * altura) / 2;
}
console.groupEnd();

//Código del círculo.
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
