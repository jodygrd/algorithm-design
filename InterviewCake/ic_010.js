class BSTNode {
	constructor(data){
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

function findLargestElement(root){

	//depth-first traversal, straight down the right side

	let node = root;

	while (node) {
		if (!node.right) return node.data;
		let node = node.right;
	}

}

//the second largest element is to the left of the largest, either directly, or straight above it. We need to check for both cases. 

function findSecondLargestElement(root) {
	let node = root;

	while (node) {
		//case 1: no right subtree, means second largest is largest in left subtree
		if (node.left && !node.right) {
			return findLargestElement(node.left);
		}	

		if (node.right 
			&& !node.right.right 
			&& !node.right.left) {
			return node.data;
		}

		node = node.right;


	}

}