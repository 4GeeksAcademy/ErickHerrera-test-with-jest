let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (156.5 / 1.07);
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (0.87 / 156.5);
    return valueInPound;
}

module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound }
