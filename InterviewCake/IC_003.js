// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.





function highestProductOfThree(array){
  
    let highestInt = Math.max(array[0], array[1])
    let lowestInt = Math.min(array[0], array[1])


	let highestProductofTwo = array[0]*array[1];
	let lowestProductofTwo = array[0]*array[1];
    
    let maxProduct = array[0]*array[1]*array[2];
    
    
	for (let i = 2; i < array.length; i++) {

                           
        if ((array[i] * highestProductofTwo || array[i] * lowestProductofTwo) > maxProduct) {
          maxProduct = Math.max(array[i]*highestProductofTwo, array[i]*lowestProductofTwo);
        }
        if ((array[i] * highestInt || array[i] * lowestInt) > highestProductofTwo) {
          highestProductofTwo = Math.max(array[i]*highestInt, array[i]*lowestInt);
        }
        if ((array[i] * highestInt || array[i] * lowestInt) < lowestProductofTwo) {
          lowestProductofTwo = Math.min(array[i]*highestInt, array[i]*lowestInt);
        }
        if (array[i] > highestInt){
          highestInt = array[i];
        }
        if (array[i] < lowestInt) {
          lowestInt = array[i]
        }
      
      //Interview Cake Suggested solution - much cleaner!
//      maxProduct = Math.max(maxProduct, array[i]*highestProductofTwo, array[i]*lowestProductofTwo);
//     
//      highestProductofTwo = Math.max(highestProductofTwo, highestInt*array[i], lowestInt*array[i]);
//      
//      lowestProductofTwo = Math.min(highestProductofTwo, highestInt*array[i], lowestInt*array[i]);
//      
//      highestInt = Math.max(highestInt, array[i]);
//      
//      lowestInt = Math.min(lowestInt, array[i]);
	}
	return maxProduct;

}

console.log(highestProductOfThree([0,0,0,-1,-1,-4,2]))

//expect 120