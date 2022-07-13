function calcularPrecioConDecuento(precio, descuento) {
    return precio * (100 - descuento) / 100; 
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;
    const precioConDescuento = calcularPrecioConDecuento(inputPrice, inputDiscount);
    document.getElementById("ResultPrice").innerText = `El precio con descuento es: ${precioConDescuento} USD`;
}