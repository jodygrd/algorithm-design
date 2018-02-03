// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.





function highestProductOfThree(array){


	let min = array[0]
	let second = array[1]
	let third = array[2]
	const maxProduct = first*second*third;

	if (array.length === 3) {
		return maxProduct
	}

	for (let i = 3; i < array.length; i++) {
		if (array[i] > (first || second || third)) {
			
		}

		let maxProduct = first*second*third;
	}
	return maxProduct;

}

console.log(highestProductOfThree([1,2,0,4,-1]))

//expect 8