
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que convierte monedas
const fromDollarToYen = (dollar) => {
    let yen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return yen; 
}
// solo un registro en consola para nosotros.
console.log(fromDollarToYen(100));

const fromEuroToDollar = (euro) => {
    let dollar = euro * oneEuroIs.USD;
    return dollar; 
}
console.log(fromEuroToDollar(100));

const fromYanToPound = (yan) => {
    let pound = (yan / oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound; 
}
console.log(fromYanToPound(1279));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };

