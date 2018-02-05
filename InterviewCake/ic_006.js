//LOVE RECTANGLE

 const myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 6,
    height: 3,

};

 const otherRectangle = {

    // coordinates of bottom-left corner
    leftX: 2,
    bottomY: 2,

    // width and height
    width: 2,
    height: 1,

};
//find each overlap:
//X overlap

// function findXOverlap(rectangleA, rectangleB) {
// 	const overlapXleft = Math.max(rectangleA.leftX, rectangleB.leftX);
// 	//2
// 	const rightXA = (rectangleA.width + rectangleA.leftX);
// 	//7
// 	const rightXB = (rectangleB.width + rectangleB.leftX);
// 	//9
// 	const overlapXright = Math.min(rightXA, rightXB);

// 	if (overlapXright <= overlapXleft) {
// 		return "No overlap"
// 	}


// 	return {leftX : overlapXleft, width: overlapXright-overlapXleft};

// }

// function findYOverlap(rectangleA, rectangleB){

// 	const overlapYBottom = Math.max(rectangleA.bottomY, rectangleB.bottomY);
// 	//2
// 	const bottomYA = (rectangleA.height + rectangleA.bottomY);
// 	//7
// 	const bottomYB = (rectangleB.height + rectangleB.bottomY);
// 	//9
// 	const overlapYTop = Math.min(bottomYA, bottomYB);

// 	if (overlapYTop  <= overlapYBottom) {
// 		return "No overlap"
// 	}

// 	return {bottomY: overlapYBottom, height: overlapYTop-overlapYBottom};

// }


// function findOverlap(rectangleA, rectangleB) {
// 	const overlap = {}

// 	const yOverlap = findYOverlap(rectangleA, rectangleB)
// 	const xOverlap = findXOverlap(rectangleA, rectangleB)
// 	if ((yOverlap || xOverlap) === 'No overlap') {
// 		return 'No overlap'
// 	}

// 	overlap['bottomY'] = yOverlap.bottomY
// 	overlap['height'] = yOverlap.height
// 	overlap['leftX'] = xOverlap.leftX
// 	overlap['width'] = xOverlap.width

// 	return overlap

// }

//REFACTORED

function findRangeOverlap(coordinateA, coordinateB, lengthA, lengthB) {
	const start = Math.max(coordinateA, coordinateB);
	const end = Math.min(lengthA+coordinateA, lengthB+coordinateB);

	if (end <= start) {
		return 'no overlap'
	}

	return {start: start, length: end-start}

}

function findOverlap(rectangleA, rectangleB) {
	const overlap = {}

	const xOverlap = findRangeOverlap(rectangleA.leftX, rectangleB.leftX, rectangleA.width, rectangleB.width);
	const yOverlap = findRangeOverlap(rectangleA.bottomY, rectangleB.bottomY, rectangleA.height, rectangleB.height);
	if ((yOverlap || xOverlap) === 'no overlap') {
		return 'no overlap'
	}

	overlap['bottomY'] = yOverlap.start
	overlap['height'] = yOverlap.length
	overlap['leftX'] = xOverlap.start
	overlap['width'] = xOverlap.length

	return overlap

}
console.log(findOverlap(myRectangle, otherRectangle));


