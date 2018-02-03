//Stock Prices

//Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

//For example:

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)




function getMaxProfit(stockPricesYesterday){
	let minSoFar = stockPricesYesterday[0];
	let maxDifference = stockPricesYesterday[1] - minSoFar;

	for (let i=1; i < stockPricesYesterday.length; i++) {
		let currentDifference = stockPricesYesterday[i] - minSoFar;
		if (currentDifference > maxDifference) {
			maxDifference = currentDifference;
		}
		if (stockPricesYesterday[i] < minSoFar) {
			minSoFar = stockPricesYesterday[i];
		}
	}

	return maxDifference;

}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPricesYesterday));

var stockPricesYesterday = [10, 7, 5, 8, 19, -2];
console.log(getMaxProfit(stockPricesYesterday));

var stockPricesYesterday = [10,9,8,7,6];
console.log(getMaxProfit(stockPricesYesterday));

