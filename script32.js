let suma=0;
let media=0;
for(let i=1;i<=10; i++){
    number= parseInt(prompt("Dame el número "+i+":"));
    suma=suma+number;
    console.log (suma);
}
media= suma/10;
console.log ("La media aritmética es "+media);
