//Make a temperature tracker class;

class TempTracker(){
	constructor(){
		//for min/max
		this.minTemp = null;
		this.maxTemp = null;

		//for mean
		this.numberOfTemps = 0;
		this.totalTemp = 0 

		//for mode
		//initialize an array of zeroes to the max number - i don't like this method
		this.modeCounter = []
		for (i = 0; i < 111; i++) {
			this.modeCounter[i] = 0
		}

		this.maxOccurrences = 0;
		this.mode = null;
	}

	insert(temp){

		//for min/max
		if (this.minTemp === null || temp < this.minTemp ){
			this.minTemp = temp;
		}
		if (this.maxTemp === null || temp > this.maxTemp) {
			this.maxTemp = temp;
		}
		
		//for mean
		this.numberOfTemps++
		this.totalTemp += temp;

		if (!this.modeCounter[temp]) {
			this.modeCounter[temp] = 1
		} else {
			this.modeCounter[temp]++
		}

		//for mode 
		this.modeCounter[temp]++;
		if (this.modeCounter[temp] > this.maxOccurrences) {
			this.maxOccurrences = this.modeCounter[temp];
			this.mode = temp;
		}

	}

	getMax(){
		return this.minTemp;
	}

	getMin() {
		return this.minTemp;
	}

	getMean() {
		return this.totalTemp/this.numberOfTemps;
	}

	getMode() {
		return this.mode;
	}





}




}