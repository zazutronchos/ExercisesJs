const number1 = parseInt(prompt("Dame el primer número "));
const number2 = parseInt(prompt("Dame el segundo número "));
let numberResult = number1 + number2;
console.log("La suma de los números es " + numberResult);
if (number1==number2){
    console.log("Son iguales, multiplicado por 3 es " + numberResult * 3)
}
else {
    console.log("Los números no son iguales")
}