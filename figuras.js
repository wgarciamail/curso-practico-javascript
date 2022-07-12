//Código del cuadrado.
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm2`);
console.groupEnd();

console.group("Triángulo");
//Código del triángulo.
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);

console.log(`El altura del triángulo es de: ${alturaTriangulo} cm2`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo} cm2`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm2`);

console.groupEnd();

console.group("Círculos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetrosCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El radio del circulo es: ${radioCirculo} cm`);
console.log(`El diámetro del circulo es: ${diametroCirculo} cm`);
console.log(`El PI del circulo es: ${PI}`);
console.log(`El perímetro del circulo es: ${perimetrosCirculo} cm`);
console.log(`El área del circulo es: ${areaCirculo} cm2`);


console.groupEnd();
