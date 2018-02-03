// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]


function getProductsOfAllIntsExceptAtIndex(array) {
	//collect integers before current index (prod)
	//collect integers after current index (prod)
	//multiply them @ the current index
	let currentProd = 1
	const finalArray = [];
	for (let i = 0; i < array.length; i++) {
		finalArray.push(currentProd);
		currentProd *= array[i];
	}

	currentProd = 1
	for (let j = array.length-1; j >= 0; j--) {
		finalArray[j] *= currentProd;
	}


	console.log(finalArray)


}

getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])