class BstNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insertLeft(data){
		this.left = new Node(data);
		return this.left;
	}

	insertRight(data){
		this.right = new Node(data);
		return this.right;
	}

}

function validateBst(root){
	
	//create a stack that collects objects containing the current upper and lower bound. Check each node against this. (Depth first traversal)
	const nodesAndBoundsStack = [{node: root, lowerBound: -Infinity, upperBound: Infinity}];

	while (nodesAndBounds.length) {

		//grab from the stack;
		let nb = nodesAndBoundsStack.pop();
		let node = nb.node;
		let upperBound = nb.upperBound;
		let lowerBound = nb.lowerBound;

		//if invalid, return false
		if (node.data >= upperBound || node.data <= lowerBound) {
			return false;
		}

		//if there's a left node, reassign upper bound to current data and push into stack
		if (node.left) {
			nodesAndBoundsStack.push({node: node.left, upperBound: node.data, lowerBound:lowerBound});
		}

		//if there's a right node, reassign lower bound to current data and push into stack;
		if (node.right) {
			nodesAndBoundsStack.push({node: node.right, upperBound: upperBound, lowerBound:node.data});
		}

	}

	return true;

}

