const fromEuroToDollar = function(valuelnEuro) { 
    let valuelnDollar = valuelnEuro * 1.07;
    return valuelnDollar;
}
const fromDollarToYen = function(valuelnDollar){
    let valuelnYen = valuelnDollar * 156.5;
    return valuelnYen;
}
const fromYenToPound = function(valuelnYen){
    let valuelnPound = valuelnYen * 0.87;
    return valuelnPound;
}
//contenido de app.js
 const sum = (a,b) => {
    return a + b
 }
 console.log(sum(7,3))
 //One euro is:
 let OneEurols = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
 }
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

