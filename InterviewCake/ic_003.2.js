// Given an array of integers, find the highest product you can get from three of the integers.

const numbers = [-10, -10, 1, 3, 2];

function highestProdOfThree(array) {
    //we need to keep track of the highest product of two and the lowest product of two
    //that way, if a higher positive number comes along or a higher negative numbe, we can know that it's going to be the highest possible product;
    let maxOfTwo = array[0] * array[1]; //2
    let minOfTwo = array[0] * array[1]; //2
    let maxProduct = array[0] * array[1] * array[2]; //6
    //we also need to keep track of the max and min so that we can reassign the max of two, I think
    let maxSoFar = Math.max(array[0],array[1]);
    let minSoFar = Math.min(array[0],array[1]);
    
    for (i=2; i<array.length; i++) {
        //check for max product '
        if (Math.max(array[i]*minOfTwo, array[i]*maxOfTwo) > maxProduct) {
            maxProduct = Math.max(array[i]*minOfTwo, array[i]*maxOfTwo)
        }
        //check for Max of two ints
        if (Math.max(array[i] * maxSoFar, array[i] * minSoFar) > maxOfTwo){
            maxOfTwo = Math.max(array[i] * maxSoFar, array[i] * minSoFar);
        }
        //check for Min of two ints
        if (Math.min(array[i] * maxSoFar, array[i] * minSoFar) < minOfTwo) {
            minOfTwo = Math.min(array[i] * maxSoFar, array[i] * minSoFar);
        }
        //check for max
        if (array[i] > maxSoFar) {
            maxSoFar = array[i];
        }
        //check for min
        if (array[i] < minSoFar) {
            minSoFar = array[i];
        }       
        
    }
    
    return maxProduct;

}

console.log(highestProdOfThree(numbers)) //60