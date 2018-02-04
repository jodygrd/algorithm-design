//This is as far as I got. Will attempt again in future. 

function mergeMeetings(array){

	const mergedArray = [];


	for (i = 0; i < array.length - 1 ; i++ ) {
		if (array[i]['startTime'] <= array[i+1]['startTime']){
			first = array[i];
			second = array[i+1]
		} else {
			first = array[i+1]
			second = array[i];
		}

		if (first['endTime'] + 1 >= second['startTime']){
			let mergedMeetings = mergeTwo(first,second)
			mergedArray.push(mergedMeetings)
		}

	}
	
	

	return mergedArray;

}

function mergeTwo(meeting1, meeting2) {
		const mergedMeetings = {}
	
		mergedMeetings['startTime'] = meeting1['startTime'];
		mergedMeetings['endTime'] = meeting2['endTime'];

		return mergedMeetings
}



const sample2 =   [{startTime: 1, endTime: 2}, {startTime: 3, endTime: 4}]
const merged2 =   [{startTime: 1, endTime: 4}]

console.log(mergeMeetings(sample2));


const sampleMeetingArray =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

const expectedOutput =   [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]



//Actual Solution: 
//Sort the array using a deep clone (MDN this)! Use json.parse(json.stringify(array)); then standard sort by startTime.  This gives us an efficiency of O(nlogn) - better than On^2
//mergedArray = [sorted[0]]
//walk through array, starting at sorted[1], checking each meeting against the last one in mergedArray. 




