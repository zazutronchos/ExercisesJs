let base=parseInt(prompt("Dame el número de la base"));
let exponente=parseInt(prompt("Dame el número del exponente"));
let resultado=0;
for(let i=base; i<=exponente; i++){
    resultado= base**i;
}
console.log(resultado)