function highestProduct(array){
  
  array.sort((a,b) => a - b)
  
  var firstTest = array[0]*array[1]*array[array.length-1];
  var secondTest = 1
  
  for (j = array.length-1; j >= array.length-3; j--){
    secondTest *= array[j]
  }  
  
  return Math.max(firstTest,secondTest)
  
}


testArray =  [-10, -10, 1, 3, 2]

console.log(highestProduct(testArray));

//NOTE!! Sorting takes O(nlogn) time! Attempt without the sort. NOT an effective algorithm.