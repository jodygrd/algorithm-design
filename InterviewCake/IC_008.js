//is a BST "superbalanced?"

//"The difference between the min leaf depth and the max leaf depth is 1 or less"
//"There are at most two distinct leaf depths, and they are at most 1 apart"


//idea:
//find the depth of the left node and find the depth of the right node? 

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data < this.data && !this.left) {
			this.left = new Node(data);
			return;
		} else if (data < this.data) {
			return this.left.insert(data);
		}

		if (data > this.data && !this.right) {
			this.right = new Node(data);
			return;
		} else if (data > this.data) {
			return this.right.insert(data);
		}

	}

}


// function traverseDF(fn, rootNode){
// 	const nodeQueue = [rootNode]
// 	while (nodeQueue.length) { //this might work I really have no idea
// 		let currentNode = nodeQueue.shift();
// 		nodeQueue.unshift(currentNode.left, currentNode.right); 
// 		fn(currentNode); 
// 	}
}

function isBalanced(rootNode){
	if (!rootNode) {
		return true;
	}

	const depths = [];

	//this will be a stack of pairs - node + depth WOW
	const nodes = [[treeRoot,0]];


	while (nodes.length) {

		//remove node from stack
		let nodePair = nodes.pop();
		let node = nodePair[0];
		let depth = nodePair[1];


		//case - our node is a 'leaf' - it is hanging on the end and it does not have any nodes below it, to the left or to the right. We measure ITS depth, which we know because OUTSIDE of this 
		if (!node.left && !node.right) {
			
			//check if it's a new depth
			if (depths.indexOf(depth) < 0) {
				depths.push(depth);
				//tree is unbalanced if:
				//more than 2 depths!
				//2 depths have difference > 2
				if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1])>1)){
					return false
				}

			}

		} else {
				//NOT A LEAF, keep walking through tree amiga. 
				//insert next pairs into tree
				if (node.left) {
					nodes.push([node.left, depth +1 ])
				}
				if (node.right) {
					node.push([node.right, depth +1])
				}

		}

		return true;
	}



}






















