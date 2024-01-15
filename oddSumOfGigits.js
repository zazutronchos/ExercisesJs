function evenSum(number){
    const numberConvToString = number.toString();
    let sumOfDigits = 0;
    for(let i=0; i<numberConvToString.lenght; i++){
        sumOfDigits += parseInt(numberConvToString[i]);
    }
    return (sumOfDigits%2==0);
}
console.log(evenSum(56));