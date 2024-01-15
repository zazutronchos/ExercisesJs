let arrayOfNumbers=[0,3,25,-4,17,28324,-17];
function findMin(array){
    let min=array[0];
    for (let i=1; i<=array.length-1; i++){
        if(array[i]<min) min=array[i];
    }
    return min;
}
console.log(findMin(arrayOfNumbers));