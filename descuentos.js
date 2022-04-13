const coupons = [
    "Viaje70",
    "Black Friday",
    "Mi prrimera compra",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // Viaje70
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 50; //Black Friday
        break;
        case coupons[2]: //Mi primera compra
            descuento = 70;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son $" + precioConDescuento;

const coupons = [
    "Viaje70",
    "Black Friday",
    "Mi prrimera compra",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // Viaje70
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 50; //Black Friday
        break;
        case coupons[2]: //Mi primera compra
            descuento = 70;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}