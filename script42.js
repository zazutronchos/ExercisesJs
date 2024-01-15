let arrayOfNumbers=[14,0,-2,20,175,48];
/*let reves=arrayOfNumbers.reverse();
console.log (reves)*/
let auxArray=[];
for(let i=arrayOfNumbers.lenght-1;i>=0;i--){
    auxArray.push(arrayOfNumbers[i]);
}
console.log(arrayOfNumbers);
console.log(auxArray)