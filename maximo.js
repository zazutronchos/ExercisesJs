let arrayOfNumbers=[0,3,25,-4,17,28324, -17];
function findMax(array){
    let max=array[0];
    for (let i=1; i<=array.length-1;i++){
        if(array[i]>max) max=array[i];
    }
    return max;
}
console.log(findMax(arrayOfNumbers));

export{findMax};