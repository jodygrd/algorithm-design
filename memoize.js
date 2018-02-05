function memoize(fn) { 
	//record of all previous calls and their results
	const cache = {};

	//take the arguments from the function we are passing to it in an array using the spread operator from ES2015
	return function(...args) {
		//if the function has been called with these exact arguments, RETURN
		if (cache[args]) {
			return cache[args];
		}
		//now we DO call the arguments and store it in the cache! Use .apply method with 'this' object and ars
		const result = fn.apply(this, args);
		//store result in our cache object
		cache[args] = result;
		
		//return the result
		return result;

	}
}