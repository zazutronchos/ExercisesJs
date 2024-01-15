export
function findDNILetter(number){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P','D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    return letras[number%23];}
    let number;
    let numberIsWrong = true;
    do{
    number = parseInt(prompt("Dame tu número de DNI"));
    if (number >0 && number<99999999){
    numberIsWrong = false;
    console.log(`La letra de DNI que corresponde al número ${number} es ${findDNILetter(number)}`);}
    } while (numberIsWrong)