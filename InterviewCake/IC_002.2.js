//You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.



function getProductsOfAllIntsExceptAtIndex(array) {
    // multiply through front ways
    let product = 1;
    const prodArray = [];
    
    for (i=0; i< array.length; i++){
        prodArray.push(product);
        product *= array[i];
    }
    
    product = 1;
    // multiply through back ways
    for (j=array.length-1; j >= 0; j--) {
        prodArray[j] *= product;
        product *= array[j]
    }
    return prodArray;
    
}

 const nums = [1, 7, 3, 4]

 console.log(getProductsOfAllIntsExceptAtIndex(nums))

//VICTORY!