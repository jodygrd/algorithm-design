var testArray = [2, 3, 4, 5, 6]

function getProductsOfAllIntsExceptAtIndex(array) {
  
  
  var productArray = []
  var prodBeforeIndex = 1 
  for (i=0; i<array.length; i++){
    productArray[i] = prodBeforeIndex;
    prodBeforeIndex *= array[i];
  }
  
  var finalProd = 1;
  for (j = array.length - 1 ; j >= 0; j--){
    productArray[j] *= finalProd;
    finalProd *= array[j];
  }
  
  console.log(productArray);
  return productArray;
  
}


getProductsOfAllIntsExceptAtIndex(testArray)